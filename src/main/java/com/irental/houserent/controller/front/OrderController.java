package com.irental.houserent.controller.front;

import com.irental.houserent.common.base.BaseController;
import com.irental.houserent.common.constant.Constant;
import com.irental.houserent.common.dto.JsonResult;
import com.irental.houserent.common.enums.HouseStatusEnum;
import com.irental.houserent.common.enums.OrderStatusEnum;
import com.irental.houserent.common.util.BigDecimalUtil;
import com.irental.houserent.common.util.DateUtil;
import com.irental.houserent.entity.House;
import com.irental.houserent.entity.Order;
import com.irental.houserent.entity.User;
import com.irental.houserent.service.HouseService;
import com.irental.houserent.service.OrderService;
import com.irental.houserent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

/*
 * 前端订单控制器
 * */
@Controller("frontOrderController")
public class OrderController extends BaseController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private HouseService houseService;

    @Autowired
    private UserService userService;


    /*
     * 创建订单
     * */
    @RequestMapping("/order/create")
    @ResponseBody
    public JsonResult createOrder(@RequestParam("houseId") Long houseId, @RequestParam("endDate") String endDateStr) {
        if (getLoginUser() == null) {
            return JsonResult.error("用户未登录");
        }

        House house = houseService.get(houseId);
        if (house == null) {
            return JsonResult.error("房屋信息不存在");
        }

        if (Objects.equals(house.getStatus(), HouseStatusEnum.HAS_RENT.getValue())) {
            return JsonResult.error("房屋已被租出或未上架");
        }

        Order checkOrder = orderService.getCurrentEffectiveOrder(houseId);
        if (checkOrder != null) {
            return JsonResult.error("房屋已被租出或未上架");
        }

        User ownerUser = userService.get(house.getUserId());
        if (ownerUser == null) {
            return JsonResult.error("房东用户不存在");
        }

        //退租日期
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
        Date endDate;
        try {
            endDate = sdf.parse(endDateStr);
        } catch (ParseException e) {
            e.printStackTrace();
            return JsonResult.error("退租日期格式不合法");
        }
        Date startDate = new Date();

        //计算总共天数
        Integer dayNum = DateUtil.daysBetween(startDate, endDate);
        if (dayNum <= Constant.MIN_RENT_DAYS) {
            return JsonResult.error("最少租住" + Constant.MIN_RENT_DAYS + "天");
        }

        //创建订单
        Order order = new Order();
        order.setCreateTime(new Date());
        order.setCustomerUserId(getLoginUserId());
        order.setOwnerUserId(house.getUserId());
        order.setHouseId(houseId);
        order.setStatus(OrderStatusEnum.NOT_AGREEMENT.getValue());
        order.setMonthRent(house.getMonthRent());
        order.setDayNum(dayNum);
        order.setTotalAmount(house.getMonthRent() / 30 * dayNum);
        order.setStartDate(startDate);
        order.setEndDate(endDate);
        orderService.insert(order);

        return JsonResult.success("订单创建成功，请签订合同。", order.getId());
    }

    /*
     * 查看合同信息
     * */
    @RequestMapping("/order/agreement/view")
    public String agreementView(@RequestParam(value = "orderId") Long orderId, Model model) {
        if (getLoginUser() == null) {
            return "redirect:/";
        }
        //订单不存在
        Order order = orderService.get(orderId);
        if (order == null) {
            return renderNotFound();
        }
        //登录用户不是该订单的租客、房东或管理员，就无权限查看。
        if (!Objects.equals(getLoginUserId(), order.getCustomerUserId()) && !Objects.equals(getLoginUserId(), order.getOwnerUserId()) && !loginUserIsAdmin()) {
            return renderNotAllowAccess();
        }
        //该订单的房屋信息
        order.setHouse(houseService.get(order.getHouseId()));
        //该订单的租客信息
        order.setCustomerUser(userService.get(order.getCustomerUserId()));
        //该订单的房东信息
        order.setOwnerUser(userService.get(order.getOwnerUserId()));
        model.addAttribute("order", order);
        return "front/agreement";
    }


    /*
     * 签订合同
     * */
    @RequestMapping("/order/agreement/submit")
    @ResponseBody
    public JsonResult agreementSubmit(@RequestParam(value = "orderId") Long orderId, Model model) {
        if (getLoginUser() == null) {
            return JsonResult.error("用户未登录");
        }
        //订单不存在
        Order order = orderService.get(orderId);
        if (order == null) {
            return JsonResult.error("订单不存在");
        }

        House house = houseService.get(order.getHouseId());
        if (house == null) {
            return JsonResult.error("房屋信息不存在");
        }

        //登录用户不是该订单的租客、房东或管理员，就无权限查看。
        if (!Objects.equals(getLoginUserId(), order.getCustomerUserId()) && !Objects.equals(getLoginUserId(), order.getOwnerUserId()) && !loginUserIsAdmin()) {
            return JsonResult.error("没有权限");
        }

        if (Objects.equals(house.getStatus(), HouseStatusEnum.HAS_RENT.getValue())) {
            return JsonResult.error("房屋已被租出或未上架");
        }

        Order checkOrder = orderService.getCurrentEffectiveOrder(order.getHouseId());
        if (checkOrder != null) {
            return JsonResult.error("房屋已被租出或未上架");
        }

        User ownerUser = userService.get(house.getUserId());
        if (ownerUser == null) {
            return JsonResult.error("房东用户不存在");
        }
        order.setStatus(OrderStatusEnum.NOT_PAY.getValue());
        orderService.update(order);
        return JsonResult.success("合同签订成功，请支付订单", orderId);
    }

    /*
     * 转向支付页面
     * */
    @RequestMapping("/order/pay")
    public String pay(@RequestParam(value = "orderId") Long orderId, Model model) {
        if (getLoginUser() == null) {
            return "redirect:/";
        }
        //订单不存在
        Order order = orderService.get(orderId);
        if (order == null) {
            return renderNotFound();
        }
        //登录用户不是该订单的租客、房东或管理员，就无权限查看。
        if (!Objects.equals(getLoginUserId(), order.getCustomerUserId()) && !Objects.equals(getLoginUserId(), order.getOwnerUserId()) && !loginUserIsAdmin()) {
            return renderNotAllowAccess();
        }
        House house = houseService.get(order.getHouseId());
        if (house == null) {
            return renderNotFound();
        }
        //该订单的房屋信息
        order.setHouse(houseService.get(order.getHouseId()));
        model.addAttribute("order", order);
        return "front/pay";
    }


    /*
     * 模拟支付
     * */
    @RequestMapping("/order/pay/submit")
    @ResponseBody
    public JsonResult paySubmit(@RequestParam(value = "orderId") Long orderId, @RequestParam(value = "payMethod") String payMethod) {
        if (getLoginUser() == null) {
            return JsonResult.error("请先登录账号！");
        }
        //订单不存在
        Order order = orderService.get(orderId);
        if (order == null) {
            return JsonResult.error("支付的订单不存在！");
        }

        House house = houseService.get(order.getHouseId());
        if (house == null) {
            return JsonResult.error("房屋信息不存在！");
        }

        //登录用户不是该订单的租客、房东或管理员，就无权限查看。
        if (!Objects.equals(getLoginUserId(), order.getCustomerUserId()) && !Objects.equals(getLoginUserId(), order.getOwnerUserId()) && !loginUserIsAdmin()) {
            return JsonResult.error("您暂无权限操作。");
        }

        if (Objects.equals(house.getStatus(), HouseStatusEnum.HAS_RENT.getValue())) {
            return JsonResult.error("房屋已被租出或未释放。");
        }

        Order checkOrder = orderService.getCurrentEffectiveOrder(order.getHouseId());
        if (checkOrder != null) {
            return JsonResult.error("房屋已被租出或未释放。");
        }

        User ownerUser = userService.get(house.getUserId());
        if (ownerUser == null) {
            return JsonResult.error("房东用户不存在。");
        }

        //payMethod有 1：微信支付，2：支付宝支付，模拟支付成功
        if (payMethod.equals("3")) {
            Double userCurrentBalance = userService.getUserBlance(getLoginUserId());
            Double cost = order.getTotalAmount();
            Double balance = BigDecimalUtil.subtraction(userCurrentBalance, cost, 2);
            if (balance >= 0) {
                //余额充足，进行支付成功。
                order.setStatus(OrderStatusEnum.NORMAL.getValue());
                orderService.update(order);
                //更新房屋状态和开始、结束时间
                house.setStatus(HouseStatusEnum.HAS_RENT.getValue());
                house.setLastOrderStartTime(order.getStartDate());
                house.setLastOrderEndTime(order.getEndDate());
                houseService.update(house);
                userService.updateUserBalance(balance, ownerUser.getUserName());
                return JsonResult.success("支付成功，开始联系房东入住吧");
            } else {
                return JsonResult.error("账户余额不足，请先充值或选择其他支付方式。");
            }
        } else if (payMethod.equals("1")) {
            /*用于测试环境下的模拟订单支付成功环境*/
            order.setStatus(OrderStatusEnum.NORMAL.getValue());
            orderService.update(order);
            house.setStatus(HouseStatusEnum.HAS_RENT.getValue());
            house.setLastOrderStartTime(order.getStartDate());
            house.setLastOrderEndTime(order.getEndDate());
            houseService.update(house);
            return JsonResult.success("模拟支付成功，联系房东入住吧。");
        } else if (payMethod.equals("2")) {
            /*用于测试环境下的模拟订单支付成功环境*/
            order.setStatus(OrderStatusEnum.NORMAL.getValue());
            orderService.update(order);
            house.setStatus(HouseStatusEnum.HAS_RENT.getValue());
            house.setLastOrderStartTime(order.getStartDate());
            house.setLastOrderEndTime(order.getEndDate());
            houseService.update(house);
            return JsonResult.success("模拟支付成功，联系房东入住吧。");
        } else {
            return JsonResult.error("未知支付功能参数，请勿修改支付参数！您的IP已被记录。");
        }

    }

}

