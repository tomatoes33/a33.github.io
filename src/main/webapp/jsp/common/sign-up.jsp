<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <div class="row justify-content-center ">
            <div class="sec-heading center">
                <h3>注册</h3>
            </div>
        </div>
        <form id="registerForm">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <label>姓名</label>
                        <div class="input-with-icon">
                            <input type="text" name="userDisplayName" class="form-control" placeholder="姓名">
                            <i class="ti-user"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>电子邮箱</label>
                        <div class="input-with-icon">
                            <input type="email" name="email" class="form-control" placeholder="电子邮箱，用于找回密码">
                            <i class="ti-user"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>手机号</label>
                        <div class="input-with-icon">
                            <input type="text" name="phone" class="form-control" placeholder="手机号">
                            <i class="ti-mobile"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>账号名</label>
                        <div class="input-with-icon">
                            <input type="text" name="userName" class="form-control" placeholder="登录账号">
                            <i class="ti-user"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>密码</label>
                        <div class="input-with-icon">
                            <input type="password" name="userPass" class="form-control" placeholder="登录密码">
                            <i class="ti-unlock"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>角色</label>
                        <div class="input-with-icon">
                            <div class="simple">
                                <select name="role" class="form-control">
                                    <option value="customer">我是租客</option>
                                    <option value="owner">我是房东</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>验证码</label>
                        <div clas="input-with-icon">
                            <input class="form-control" id="verify_input_register" name="code"
                                   placeholder="请输入验证码" maxlength="4"><br>
                            <i class="ti-flag"></i>
                            <a href="javascript:void(0);" title="点击更换验证码">
                                <img id="imgVerify_register" src="/getVerify" alt="更换验证码" height="36"
                                     width="100px" onclick="getVerify(this);"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button type="button" onclick="submitRegister()" class="btn btn-md full-width pop-login bg-2">
                    立即注册
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