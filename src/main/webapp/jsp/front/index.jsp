<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<%--整租--%>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <div class="row justify-content-center ">
            <div class="sec-heading center">
                <h2>最新整租</h2>
            </div>
        </div>
        <div class="row">
            <c:choose>
                <c:when test="${recentWholeHouseList !=null}">
                    <c:forEach items="${recentWholeHouseList}" var="c">
                        <div class="col-lg-4 col-md-6 col-sm-10">
                            <div class="single_property_style property_style_2 modern">
                                <div class="listing_thumb_wrapper">
                                    <a href="/house/detail/${c.id}"><img src="${c.thumbnailUrl}"
                                                                         class="img-fluid mx-auto"></a>
                                </div>
                                <div class="property_caption_wrappers">
                                    <div class="property_short_detail">
                                        <div>
                                            <h4 class="pr-property_title"><a
                                                    href="/house/detail/${c.id}">${c.title}</a>
                                            </h4>
                                            <div class="listing-location-name">
                                                <a href="/house/detail/${c.id}">${c.address}</a>
                                            </div>
                                            <div class="property-lists">
                                                <P>${c.bedroomNum}间卧室 ${c.toiletNum}间卫生间</p>
                                            </div>
                                            <div class="box blueXian">
                                                <div class="left xian">
                                                    <div class="property-real-price">
                                                        <a href="/house/detail/${c.id}">￥${c.monthRent}<span
                                                                class="price_status">/月</span></a>
                                                    </div>
                                                </div>
                                                <div class="right xian">
                                                    <div class="fp_types">
                                                        <a href="javascript:void(0)" class="markHouse"
                                                           onclick="submitMark(${c.id})">收藏</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                </c:when>
            </c:choose>
        </div>
    </div>
</section>

<%--合租--%>
<section class="gray-simple">
    <div class="container">
        <div class="row justify-content-center">
            <div class="sec-heading center">
                <h2>最新合租</h2>
            </div>
        </div>
        <div class="row">
            <c:choose>
                <c:when test="${recentShareHouseList !=null}">
                    <c:forEach items="${recentShareHouseList}" var="c">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="single_property_style property_style_2 modern">
                                <div class="listing_thumb_wrapper">
                                    <a href="/house/detail/${c.id}"><img src="${c.thumbnailUrl}"
                                                                         class="img-fluid mx-auto"></a>
                                </div>
                                <div class="property_caption_wrappers">
                                    <div class="property_short_detail">
                                        <div>
                                            <h4 class="pr-property_title"><a
                                                    href="/house/detail/${c.id}">${c.title}</a>
                                            </h4>
                                            <div class="listing-location-name">
                                                <a href="/house/detail/${c.id}">${c.address}</a>
                                            </div>
                                            <div class="property-lists">
                                                <P>${c.bedroomNum}间卧室 ${c.toiletNum}间卫生间</p>
                                            </div>
                                            <div class="box blueXian">
                                                <div class="left xian">
                                                    <div class="property-real-price">
                                                        <a href="/house/detail/${c.id}">￥${c.monthRent}<span
                                                                class="price_status">/月</span></a>
                                                    </div>
                                                </div>
                                                <div class="right xian">
                                                    <div class="fp_types">
                                                        <a href="javascript:void(0)" class="markHouse"
                                                           onclick="submitMark(${c.id})">收藏</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                </c:when>
            </c:choose>
        </div>
    </div>
</section>

<%--出售--%>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <div class="row justify-content-center ">
            <div class="sec-heading center">
                <h2>最新出售</h2>
            </div>
        </div>
        <div class="row">
            <c:choose>
                <c:when test="${recentSaleHouseList !=null}">
                    <c:forEach items="${recentSaleHouseList}" var="c">
                        <div class="col-lg-4 col-md-6 col-sm-10">
                            <div class="single_property_style property_style_2 modern">
                                <div class="listing_thumb_wrapper">
                                    <a href="/house/detail/${c.id}"><img src="${c.thumbnailUrl}"
                                                                         class="img-fluid mx-auto"></a>
                                </div>
                                <div class="property_caption_wrappers">
                                    <div class="property_short_detail">
                                        <div>
                                            <h4 class="pr-property_title"><a
                                                    href="/house/detail/${c.id}">${c.title}</a>
                                            </h4>
                                            <div class="listing-location-name">
                                                <a href="/house/detail/${c.id}">${c.address}</a>
                                            </div>
                                            <div class="property-lists">
                                                <P>${c.bedroomNum}间卧室 ${c.toiletNum}间卫生间</p>
                                            </div>
                                            <div class="box blueXian">
                                                <div class="left xian">
                                                    <div class="property-real-price">
                                                        <a href="/house/detail/${c.id}">￥${c.housePrice}<span
                                                                class="price_status">/平米</span></a>
                                                    </div>
                                                </div>
                                                <div class="right xian">
                                                    <div class="fp_types">
                                                        <a href="javascript:void(0)" class="markHouse"
                                                           onclick="submitMark(${c.id})">收藏</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                </c:when>
            </c:choose>
        </div>
    </div>
</section>
