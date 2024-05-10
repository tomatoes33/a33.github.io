package com.irental.houserent.controller.front;

import com.irental.houserent.common.base.BaseController;
import com.irental.houserent.common.constant.Constant;
import com.irental.houserent.common.dto.JsonResult;
import com.irental.houserent.entity.User;
import com.irental.houserent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Date;

/*
 * 注册控制器
 * */
@Controller
@RequestMapping("/register")
public class RegisterController extends BaseController {
    @Autowired
    private UserService userService;

    @RequestMapping("/signup")
    public String signup() {
        return "common/sign-up";
    }

    /*
     * 注册提交
     * */
    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    @ResponseBody
    public JsonResult registerSubmit(User user, HttpSession session) {
        if (user == null) {
            return JsonResult.error("接收到非法访问，请重试！");
        }
        if (user.getUserName().equals("") || user.getEmail().equals("") || user.getPhone().equals("") || user.getUserDisplayName().equals("") || user.getUserPass().equals("") || user.getRole().equals("")) {
            return JsonResult.error("请完整填写注册资料后再提交！");
        }
        String random = (String) session.getAttribute("IRENTALSESSIONKEY");
        if (random == null) {
            return JsonResult.error("请输入验证码");
        }
        if (!random.equals(user.getCode())) {
            return JsonResult.error("验证码错误");
        }
        User user1 = userService.findByUserName(user.getUserName());
        if (user1 != null) {
            return JsonResult.error("用户已存在，请重新输入");
        }

        user.setIdCard("");
        user.setUserAvatar("/assets/img/default-avatar.jpg");
        user.setUserDesc("还未填写...");
        user.setSex("保密");
        user.setHobby("暂未填写");
        user.setJob("暂未填写");
        user.setCreateTime(new Date());
        user.setBalance(100000.00);
        try {
            userService.insert(user);
        } catch (Exception e) {
            e.printStackTrace();
            return JsonResult.error("注册失败，请重试！");
        }
        session.setAttribute(Constant.SESSION_USER_KEY, user);
        return JsonResult.success("注册成功！请继续完善个人资料...");
    }
}
