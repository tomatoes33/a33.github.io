package com.irental.houserent;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.TimeZone;

@Slf4j
@SpringBootApplication
@EnableScheduling
@EnableAsync
@CrossOrigin(origins = "*")
@MapperScan("com.irental.houserent.mapper")
public class StartApplication {
    public static void main(String[] args) {
        TimeZone.setDefault(TimeZone.getTimeZone("GMT+8"));
        org.springframework.context.ApplicationContext ac = SpringApplication.run(StartApplication.class, args);
        //启动完成后，自动打开浏览器
        String port = ac.getEnvironment().getProperty("server.port");
        String IPPort = "http://localhost:" + (port == null ? 8080 : port);
        //System.out.println("后端启动成功：" + IPPort);
        String[][] openPages = new String[][]{{"首页", "/"},};
        for (String[] openPage : openPages) {
            String url = IPPort + openPage[1];
            System.out.println("自动打开[" + openPage[0] + "]:" + url);
            System.setProperty("java.awt.headless", "false");
            try {
                //Runtime.getRuntime().exec("C:\\Application\\chrome.exe " + url );
                java.awt.Desktop.getDesktop().browse(new java.net.URI(url));
                Thread.sleep(3000);
            } catch (Exception e) {
                System.out.println("自动打开浏览器失败");
            }
        }
    }

}
