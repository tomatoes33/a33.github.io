<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <div class="row">
            <c:forEach items="${pageInfo.records}" var="c">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="property_block_wrap style-2">
                        <div class="property_block_wrap_header">
                            <a href="/news/detail/${c.id}"><h3>${c.title}</h3></a>
                        </div>
                        <div class="block-body">
                                ${c.summary}
                            <p style="margin-top: 5px;">作者：${c.author} | 发布时间：
                                <fmt:formatDate value="${c.createTime}" pattern="yyyy-MM-dd"></fmt:formatDate></p>
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
</section>


