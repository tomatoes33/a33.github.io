package com.irental.houserent.common.enums;

/*
 * 房屋出租方式枚举
 * */
public enum HouseRentTypeEnum {
    /*
     * 整租
     * */
    WHOLE("whole"),
    /*
     * 合租
     * */
    SHARE("share"),
    /*
     * 出售
     * */
    SALE("sale"),
    ;

    private String value;

    HouseRentTypeEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }


}
