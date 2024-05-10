package com.irental.houserent.common.util;

import java.math.BigDecimal;
import java.math.MathContext;

public class BigDecimalUtil {

    /**
     * double加法
     */
    public double add(double a, double b) {
        BigDecimal b1 = new BigDecimal(a);
        BigDecimal b2 = new BigDecimal(b);
        return b1.add(b2).doubleValue();
    }

    /**
     * double减法
     */
    public static double subtraction(double a, double b, int setPrecision) {
        BigDecimal b1 = new BigDecimal(a);
        BigDecimal b2 = new BigDecimal(b);
        return b1.subtract(b2, new MathContext(setPrecision)).doubleValue();
    }

    /**
     * double乘法 结果保留两位小数
     */
    public static double multiplication(double a, double b) {
        BigDecimal b1 = new BigDecimal(a);
        BigDecimal b2 = new BigDecimal(b);
        return b1.multiply(b2).doubleValue();
    }

    /**
     * double除法
     */
    public static double division(double a, double b, int accurate) {
        if (accurate < 0) {
            throw new RuntimeException("精确度必须是正整数或零");
        }
        BigDecimal b1 = new BigDecimal(a);
        BigDecimal b2 = new BigDecimal(b);
        return b1.divide(b2, accurate, BigDecimal.ROUND_HALF_UP).doubleValue();
    }


    /**
     * double除法 四舍五入
     */
    public static double divisionRounding(double a, int scale) {
        if (scale < 0) {
            throw new RuntimeException("精确度必须是正整数或零");
        }
        BigDecimal b = new BigDecimal(a);
        BigDecimal one = new BigDecimal("1");
        return b.divide(one, scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }
}
