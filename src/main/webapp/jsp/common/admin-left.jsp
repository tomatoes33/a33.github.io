<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="col-lg-2 col-md-2 col-sm-5" style="min-height: 800px;">
    <div class="property_dashboard_navbar" style="background-color: darkgrey;">
        <div class="dash_user_menues" >
            <ul>
                <c:if test="${sessionScope.user.role =='admin'}">
                    <strong><h4 style="text-align: center;color: white;">管理员后台管理</h4></strong>
                </c:if>
                <c:if test="${sessionScope.user.role =='owner'}">
                    <strong><h4 style="text-align: center;color: white;">个人中心</h4></strong> <%--房东后台管理--%>
                </c:if>
                <c:if test="${sessionScope.user.role =='customer'}">
                    <strong><h4 style="text-align: center;color: white;">个人中心</h4></strong> <%--用户后台管理--%>
                </c:if>

                <c:if test="${sessionScope.user.role == 'admin'}">
                    <li>
                        <a href="/admin/control" style="color: white">后台首页</a>
                    </li>
                </c:if>

                <c:if test="${sessionScope.user.role == 'admin'}">
                    <li>
                        <a href="/admin/news" style="color: white">新闻资讯</a>
                    </li>

                    <li>
                        <a href="/admin/feedback" style="color: white">反馈管理</a>
                    </li>

<%--                    <li>--%>
<%--                        <a href="/admin/user" style="color: white">用户管理</a>--%>
<%--                    </li>--%>
                </c:if>

                <c:if test="${sessionScope.user.role != 'admin'}">
                <li>
                    <a href="/admin/profile" style="color: white">个人信息</a>
                </li>
                </c:if>

                <c:if test="${sessionScope.user.role != 'admin'}">
                <li>
                    <a href="/admin/mark" style="color: white">我的收藏</a>
                </li>
                </c:if>

                <c:if test="${sessionScope.user.role == 'admin' || sessionScope.user.role == 'owner'}">
                    <li>
                        <a href="/admin/house" style="color: white">房屋管理</a>
                    </li>
                </c:if>

                <li>
                    <a href="/admin/order" style="color: white">订单管理</a>
                </li>

                <c:if test="${sessionScope.user.role != 'admin'}">
                    <li>
                        <a href="/admin/feedback" style="color: white">我的反馈</a>
                    </li>
                </c:if>

                <li>
                    <a href="/login/logout">退出登录</a>
                </li>
            </ul>
        </div>
    </div>
</div>
