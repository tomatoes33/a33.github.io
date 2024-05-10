<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="p-0">
    <div class="container-fluid p-0">
        <div class="row">
            <%@ include file="../common/admin-left.jsp" %>
            <div class="col-lg-9 col-md-8 col-sm-12">
                    <div class="dashboard-wraper">
                    <div class="frm_submit_block">
                        <h4>房屋管理&nbsp
                        <c:if test="${sessionScope.user.role == 'owner'}">
                        <a href="/admin/house/publish" class="btn-theme bg-2 btn-sm">发布新房源</a>
                        </c:if>
                        </h4>
                    </div>
                    <div class="row">
                        <c:forEach items="${pageInfo.records}" var="c">
                            <div class="col-lg-4">
                                <div class="dashboard_property_list">
                                    <div class="dashboard_property_list_thumb">
                                        <img src="${c.thumbnailUrl}" class="img-fluid"/>
                                        <c:choose>
                                            <c:when test="${c.rentType == 'sale' && c.status == 0}">
                                                <span class="dashboard_pr_status">未出售</span>
                                            </c:when>
                                            <c:when test="${c.status == 0}">
                                                <span class="dashboard_pr_status">未租出</span>
                                            </c:when>
                                            <c:when test="${c.status == 1}">
                                                <span class="dashboard_pr_status published">已租出</span>
                                            </c:when>
                                            <c:when test="${c.rentType == 'sale' && c.status == 1}">
                                                <span class="dashboard_pr_status published">已出售</span>
                                            </c:when>
                                            <c:when test="${c.status == -1}">
                                                <span class="dashboard_pr_status expire">已下架</span>
                                            </c:when>
                                            <c:when test="${c.status == -2}">
                                                <span class="dashboard_pr_status expire">待审核</span>
                                            </c:when>
                                            <c:when test="${c.status == -3}">
                                                <span class="dashboard_pr_status expire">审核不通过</span>
                                            </c:when>
                                            <c:otherwise>
                                                <span class="dashboard_pr_status">未知状态</span>
                                            </c:otherwise>
                                        </c:choose>
                                    </div>
                                    <div class="dashboard_property_list_content">
                                        <h4><a href="/house/detail/${c.id}">${c.title}</a></h4>
                                        <span><i class="ti-location-pin"></i>${c.address}</span>
                                    </div>
                                    <div class="dashboard_property_list_footer">
                                        <a href="/house/detail/${c.id}">查看</a>
                                        <c:if test="${c.status != 1}">
                                            <a href="/admin/house/publish?id=${c.id}">编辑</a>
                                        </c:if>
                                        <c:if test="${c.status == -1}">
                                            <a href="javascript:void(0)" onclick="upHouse(${c.id})">上架</a>
                                        </c:if>
                                        <c:if test="${c.status == 0}">
                                            <a href="javascript:void(0)" onclick="downHouse(${c.id})">下架</a>
                                        </c:if>
                                        <c:if test="${c.status != 1}">
                                            <a href="javascript:void(0)" onclick="deleteHouse(${c.id})">删除</a>
                                        </c:if>
                                        <c:if test="${isAdmin && c.status == -2}">
                                            <a href="javascript:void(0)" onclick="checkPassHouse(${c.id})">通过</a>
                                            <a href="javascript:void(0)" onclick="checkRejectHouse(${c.id})">驳回</a>
                                        </c:if>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <%@ include file="../common/page.jsp" %>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</section>

