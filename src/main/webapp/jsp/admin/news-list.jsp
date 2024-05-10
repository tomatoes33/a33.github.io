<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="p-0">
    <div class="container-fluid p-0">
        <div class="row">
            <%@ include file="../common/admin-left.jsp" %>
            <div class="col-lg-9 col-md-8 col-sm-12">
                    <div class="dashboard-wraper">
                        <div class="frm_submit_block">
                            <h4>新闻资讯&nbsp<a href="/admin/news/publish" class="btn-theme bg-2 btn-sm">拟稿</a></h4>
                        </div>
                        <table class="property-table-wrap">
                            <tbody>
                            <tr>
                                <th>标题</th>
                                <th>发布时间</th>
                                <th>作者</th>
                                <th>操作</th>
                            </tr>
                            <c:forEach items="${pageInfo.records}" var="c">
                                <tr>
                                    <td>
                                        <a href="/news/detail/${c.id}">${c.title}</a>
                                    </td>
                                    <td>
                                        <fmt:formatDate value="${c.createTime}" pattern="yyyy-MM-dd"/>
                                    </td>
                                    <td>${c.author}</td>
                                    <td>
                                        <a href="/admin/news/publish?id=${c.id}" class="delete text-blue">编辑</a>
                                        <a href="javascript:void(0)" onclick="deleteNews(${c.id})"
                                           class="delete text-danger">删除</a>
                                    </td>
                                </tr>
                            </c:forEach>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <%@ include file="../common/page.jsp" %>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>


