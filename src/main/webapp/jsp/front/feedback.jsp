<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <div class="row justify-content-center">
            <div class="sec-heading center">
                <h2>反馈</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 col-sm-6 center">
                <div class="article_detail_wrapss single_article_wrap">
                    <div class="property_block_wrap style-2">
                        <div class="block-body">
                            <form class="form-simple" id="feedbackForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group">
                                            <label>姓名</label>
                                            <input type="text" name="contactName" class="form-control simple">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>内容</label>
                                            <textarea class="form-control simple" name="content"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <button class="btn btn-theme bg-2" type="button" onclick="submitFeedback()">
                                                提交
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


