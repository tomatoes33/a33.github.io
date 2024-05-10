<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <div class="row justify-content-center ">
            <div class="sec-heading center">
                <h3>登录</h3>
            </div>
        </div>
        <form id="loginForm">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <label>账号</label>
                        <div class="input-with-icon">
                            <input type="text" name="userName" class="form-control" placeholder="请输入账号">
                            <i class="ti-user"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>密码</label>
                        <div class="input-with-icon">
                            <input type="password" name="userPass" class="form-control" placeholder="请输入密码">
                            <i class="ti-unlock"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>验证码</label>
                        <div clas="input-with-icon">
                            <input class="form-control" id="verify_input_login" name="code" placeholder="请输入验证码"
                                   maxlength="4"><br>
                            <i class="ti-flag"></i>
                            <a href="javascript:void(0);" title="点击更换验证码">
                                <img id="imgVerify_login" src="/getVerify" alt="更换验证码" height="36" width="100px"
                                     onclick="getVerify(this);"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button type="button" onclick="submitLogin()" class="btn btn-md full-width pop-login bg-2">
                    立即登录
                </button>
            </div>
        </form>
    </div>
</section>

<script>
    function getVerify(obj) {
        obj.src = "/getVerify?" + Math.random();
    }
</script>