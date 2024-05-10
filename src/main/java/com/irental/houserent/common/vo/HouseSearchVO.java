package com.irental.houserent.common.vo;

import lombok.Data;

/*
 * 房屋搜索封装参数
 * */
@Data
public class HouseSearchVO {
    //页码
    private Integer page = 1;

    //页大小
    private Integer size = 6;

    //房屋租赁状态，0为未租出
    private Integer status = 0;

    //地址关键字
    private String address = "";

    //城市名称
    private String city = "";

    //租房类型whole share sale
    private String rentType = "";

    //月租金范围，以；为分隔
    private String priceRange = "0;999999999";

    //最小价格
    private Integer minPrice = 0;

    //最高价格
    private Integer maxPrice = 999999999;

    //面积范围，以；分隔
    private String areaRange = "0;999999999";

    //最小面积
    private Integer minArea = 0;

    //最大面积
    private Integer maxArea = 999999999;

    //获得分页前缀数参数
    public String getPagePrefix() {
        StringBuffer sb = new StringBuffer();
        sb.append("?address=").append(this.address);
        sb.append("&rentType=").append(this.rentType);
        sb.append("&priceRange=").append(this.priceRange);
        sb.append("&areaRange=").append(this.areaRange);
        return sb.toString();
    }

}
