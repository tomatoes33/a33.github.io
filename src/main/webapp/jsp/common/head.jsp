<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<html>
<head>
    <meta name="viewport" content="width=device-width"/>
    <title>安居</title>
    <link rel="shortcut icon" href="/assets/img/bitbug_favicon.ico"/>
    <link rel="stylesheet" href="/assets/css/styles.css">
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/popper.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/custom.js"></script>
    <script src="/assets/js/moment.min.js"></script>
    <script src="/assets/js/daterangepicker.js"></script>
    <script src="/assets/js/dropzone.js"></script>
    <script src="/assets/js/imagesloaded.js"></script>
    <script src="/assets/js/ion.rangeSlider.min.js"></script>
    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
    <script src="/assets/js/lightbox.js"></script>
    <script src="/assets/js/markerclusterer.js"></script>
    <script src="/assets/js/morris.min.js"></script>
    <script src="/assets/js/raphael.min.js"></script>
    <script src="/assets/js/select2.min.js"></script>
    <script src="/assets/js/slick.js"></script>
    <script src="/assets/js/slider-bg.js"></script>
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/sweetalert.min.js"></script>
</head>
<body class="yellow-skin">
<div class="header header-light dark-text" style="background-color: #ff900e">
    <div class="container">
        <nav class="navigation navigation-landscape">
            <div class="nav-header" >
                <img src="/assets/img/anju.png" style="width: 80px; height: 80px">
            </div>
            <div class="nav-menus-wrapper">
                <ul class="nav-menu">
                    <li><a  href="/" style="font-size: 18px;">首页</a></li>
                    <li><a href="/house?rentType=whole" style="font-size: 18px;">整租</a></li>
                    <li><a href="/house?rentType=share" style="font-size: 18px;">合租</a></li>
                    <li><a href="/house?rentType=sale" style="font-size: 18px;">出售</a></li>
                    <li><a href="/news" style="font-size: 18px;">新闻资讯</a></li>
                </ul>
            </div>
            <c:choose>
                <c:when test="${sessionScope.user != null}">
                    <ul class="nav-menu nav-menu-social align-to-right">
                        <li>
                            <div class="btn-group account-drop">
                                <button type="button" class="btn btn-order-by-filt" data-toggle="dropdown">
                                    <img src="${sessionScope.user.userAvatar}" class="avater-img">
                                        ${sessionScope.user.userDisplayName} &nbsp;
                                    <c:choose>
                                        <c:when test="${sessionScope.user.role == 'admin'}"><span
                                                class="badge badge-danger">管理员</span></c:when>
                                        <c:when test="${sessionScope.user.role == 'owner'}"><span
                                                class="badge badge-primary">房东</span></c:when>
                                        <c:when test="${sessionScope.user.role == 'customer'}"><span
                                                class="badge badge-success">租客</span></c:when>
                                    </c:choose>
                                </button>
                                <c:choose>
                                    <%--管理员--%>
                                    <c:when test="${sessionScope.user.role == 'admin'}">
                                        <div class="dropdown-menu pull-right animated flipInX">
                                            <a href="/admin/control">后台首页</a>
                                            <a href="/admin/profile">个人中心</a>
                                            <a href="/admin/house">房屋管理</a>
                                            <a href="/admin/order">订单管理</a>
                                            <a href="/admin/news">新闻管理</a>
<%--                                            <a href="/admin/user">用户管理</a>--%>
                                            <a href="/admin/feedback">反馈管理</a>
                                            <a href="/admin/mark">我的收藏</a>
                                            <a href="/login/logout">退出登录</a>
                                        </div>
                                    </c:when>
                                    <%--房东--%>
                                    <c:when test="${sessionScope.user.role == 'owner'}">
                                        <div class="dropdown-menu pull-right animated flipInX">
                                            <a href="/admin/profile">个人中心</a>
                                            <a href="/admin/mark">我的收藏</a>
                                            <a href="/admin/house">房屋管理</a>
                                            <a href="/admin/order">订单管理</a>
                                            <a href="/admin/feedback">我的反馈</a>
                                            <a href="/login/logout">退出登录</a>
                                        </div>
                                    </c:when>
                                    <%--租客--%>
                                    <c:when test="${sessionScope.user.role == 'customer'}">
                                        <div class="dropdown-menu pull-right animated flipInX">
                                            <a href="/admin/profile">个人中心</a>
                                            <a href="/admin/mark">我的收藏</a>
                                            <a href="/admin/order">订单管理</a>
                                            <a href="/admin/feedback">我的反馈</a>
                                            <a href="/login/logout">退出登录</a>
                                        </div>
                                    </c:when>
                                </c:choose>
                            </div>
                        </li>
                    </ul>
                </c:when>
                <c:otherwise>
                    <ul class="nav-menu nav-menu-social align-to-right">
                        <li><a href="/login/log-up" class="text-dark">
                            <span class="dn-lg" style="font-size: 16px;">登录</span></a>
                        </li>
                        <li><a href="/register/signup" class="text-dark">
                            <span class="dn-lg" style="font-size: 16px;">注册</span></a>
                        </li>
                    </ul>
                </c:otherwise>
            </c:choose>
        </nav>
    </div>
</div>
