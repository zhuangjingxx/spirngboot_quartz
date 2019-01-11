package com.hgsoft;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.hgsoft.ecip.quartz.mapper")
public class EcipQuartzApplication {

	public static void main(String[] args) {
		SpringApplication application = new SpringApplication(EcipQuartzApplication.class);
		application.setBannerMode(Banner.Mode.OFF);
		application.run(args);
	}
	 
}
