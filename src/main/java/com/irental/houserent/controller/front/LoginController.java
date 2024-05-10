package com.irental.houserent.controller.front;

import com.irental.houserent.common.constant.Constant;
import com.irental.houserent.common.dto.JsonResult;
import com.irental.houserent.common.enums.UserStatusEnum;
import com.irental.houserent.entity.User;
import com.irental.houserent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/*
 * 登录相关的控制器
 * */
@Controller
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private UserService userService;

    @RequestMapping("/log-up")
    public String logUp() {
        return "common/login-up";
    }

    /*
     * 登录提交
     * */
    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    @ResponseBody
    public JsonResult loginSubmit(User user, HttpSession session) {
        if (user == null) {
            return JsonResult.error("接收到非法操作，请重试！");
        }
        String random = (String) session.getAttribute("IRENTALSESSIONKEY");
        if (random == null) {
            return JsonResult.error("请输入验证码");
        }
        if (!random.equals(user.getCode())) {
            return JsonResult.error("验证码错误");
        }
        User user1 = userService.findByUserName(user.getUserName());
        if (user1 == null) {
            return JsonResult.error("您输入的用户不存在，请重试。");
        }
        //判断密码是否正确
        if (!user.getUserPass().equals(user1.getUserPass())) {
            return JsonResult.error("您输入的密码错误，请重试。");
        }
        if (UserStatusEnum.DISABLE.getValue().equals(user1.getStatus())) {
            return JsonResult.error("此账户已被系统锁定，请联系我们获取更多帮助。");
        }
        session.setAttribute(Constant.SESSION_USER_KEY, user1);
        return JsonResult.success("登录成功，欢迎回来！");
    }

    /*
     * 退出登录，返回首页
     * */
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.removeAttribute(Constant.SESSION_USER_KEY);
        session.invalidate();
        return "redirect:/";
    }
}
