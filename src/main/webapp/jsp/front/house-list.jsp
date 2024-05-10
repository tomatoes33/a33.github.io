<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../common/head.jsp" %>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<section class="gray-simple" style="padding: 30px 0px 0px">
    <div class="container">
        <%--搜索--%>
        <div class="full_search_box nexio_search lightanic_search hero_search-radius modern">
            <div class="search_hero_wrapping">
                <form action="/house">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="form-group">
                                <label>目的地、城市或景点</label>
                                <div class="input-with-icon">
                                    <input type="text" id="address" name="address" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12">
                            <div class="form-group">
                                <label>城市名称</label>
                                <div class="input-with-icon">
                                    <select name="city" id="city" class="form-control">
                                        <option value="">不限</option>
                                        <option value="北京">北京</option>
                                        <option value="天津">天津</option>
                                        <option value="河北">河北</option>
                                        <option value="山西">山西</option>
                                        <option value="内蒙古">内蒙古</option>
                                        <option value="辽宁">辽宁</option>
                                        <option value="吉林">吉林</option>
                                        <option value="黑龙江">黑龙江</option>
                                        <option value="上海">上海</option>
                                        <option value="江苏">江苏</option>
                                        <option value="浙江">浙江</option>
                                        <option value="安徽">安徽</option>
                                        <option value="福建">福建</option>
                                        <option value="江西">江西</option>
                                        <option value="山东">山东</option>
                                        <option value="河南">河南</option>
                                        <option value="湖北">湖北</option>
                                        <option value="湖南">湖南</option>
                                        <option value="广东">广东</option>
                                        <option value="广西">广西</option>
                                        <option value="海南">海南</option>
                                        <option value="重庆">重庆</option>
                                        <option value="四川">四川</option>
                                        <option value="贵州">贵州</option>
                                        <option value="云南">云南</option>
                                        <option value="西藏">西藏</option>
                                        <option value="陕西">陕西</option>
                                        <option value="甘肃">甘肃</option>
                                        <option value="青海">青海</option>
                                        <option value="宁夏">宁夏</option>
                                        <option value="新疆">新疆</option>
                                        <option value="香港">香港</option>
                                        <option value="澳门">澳门</option>
                                        <option value="台湾">台湾</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12">
                            <div class="form-group">
                                <label>类型</label>
                                <div class="input-with-icon">
                                    <select name="rentType" id="selectRentType" class="form-control">
                                        <option value="">不限</option>
                                        <option value="whole">整租</option>
                                        <option value="share">合租</option>
                                        <option value="sale">出售</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="form-group">
                                <label>价格范围</label>
                                <div class="input-with-icon">
                                    <select name="priceRange" id="price" class="form-control">
                                        <option value="0;999999999">不限</option>
                                        <option value="0;999">1000以内</option>
                                        <option value="1000;1999">1000-1999</option>
                                        <option value="2000;3999">2000-3999</option>
                                        <option value="4000;5999">4000-5999</option>
                                        <option value="6000;7999">6000-7999</option>
                                        <option value="8000;9999">8000-9999</option>
                                        <option value="10000;14999">10000-14999</option>
                                        <option value="15000;19999">15000-19999</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 small-padd">
                            <div class="form-group none">
                                <button type="submit" class="btn search-btn">搜索</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <script type="text/javascript">
        function text() {
            var json = jsonContent
            json = eval(json.options)
            for (var i = 0; i < json.length; i++) {
                alert(json[i].text + " " + json[i].value)
            }
        }
        </script>
        <%--房屋信息--%>
        <div class="row">
            <c:forEach items="${pageInfo.records}" var="c">
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
                                                <c:choose>
                                                    <c:when test="${house.rentType.equals('sale')}">
                                                        <a href="/house/detail/${c.id}">￥${c.housePrice}<span
                                                            class="price_status">/平米</span></a></c:when>
                                                    <c:otherwise><a href="/house/detail/${c.id}">￥${c.monthRent}<span
                                                            class="price_status">/月</span></a></c:otherwise>
                                                </c:choose>
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
        </div>
        <div class="row">
             <%@ include file="../common/page.jsp" %>
        </div>
    </div>
</section>

<script>

    var minArea = ${houseSearchVO.minArea};
    var maxArea = ${houseSearchVO.maxArea};

    $(".js-range-slider-price").ionRangeSlider({
        type: "double",
        min: 0,
        max: 20000,
        grid: true
    });

    $(".js-range-slider-area").ionRangeSlider({
        type: "double",
        min: 0,
        max: 150,
        grid: true
    });
</script>