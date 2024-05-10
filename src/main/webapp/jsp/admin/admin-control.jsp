<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="p-0">
    <div class="container-fluid p-0">
        <div class="row">
            <%@ include file="../common/admin-left.jsp" %>
            <div class="col-lg-9 col-md-8 col-sm-12">
                <div class="dashboard-wraper">
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <%--用户总人数--%>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7 d-flex align-items-center">
                                            <div class="numbers">
                                                <p class="card-category">用户总人数</p>
                                                <h4 class="card-title">${userCount}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <%--上线房屋数--%>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7 d-flex align-items-center">
                                            <div class="numbers">
                                                <p class="card-category">上线房屋数</p>
                                                <h4 class="card-title">${houseCount}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <%--用户反馈数--%>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7 d-flex align-items-center">
                                            <div class="numbers">
                                                <p class="card-category">用户反馈数</p>
                                                <h4 class="card-title">${userFeedbackCount}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <%--订单总量--%>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-7 d-flex align-items-center">
                                            <div class="numbers">
                                                <p class="card-category">订单总量</p>
                                                <h4 class="card-title">${orderNum}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <%--用户交易总金额--%>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-7 d-flex align-items-center">
                                                <div class="numbers">
                                                    <p class="card-category">用户交易总金额</p>
                                                    <h4 class="card-title"><b>￥${sessionScope.user.balance}</b></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            <div class="col-md-10">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">用户反馈</h3>
                                    </div>
                                    <div class="card-body">
                                        <div id="monthlyChart" class="chart chart-pie">
                                            <tbody>
                                            <c:forEach items="${pageInfo.records}" var="c">
                                                <tr>
                                                    <td class="dashboard_propert_wrapper">
                                                        <div class="title">
                                                            <h5>${c.title}</h5>
                                                            <p>
                                                                <c:choose>
                                                                <c:when test="${c.status == 0}">
                                                                <span class="text-warning">待处理</span>
                                                            <p>反馈内容：${c.content}</p>
                                                            </c:when>
                                                            </c:choose>
                                                                ${c.contactName} ${c.contactEmail}
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </c:forEach>
                                            </tbody>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>


<script src="/assets/admin-control/js/ready.min.js"></script>
<script src="/assets/admin-control/js/demo.js"></script>

