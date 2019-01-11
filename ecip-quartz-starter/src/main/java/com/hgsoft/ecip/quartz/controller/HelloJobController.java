package com.hgsoft.ecip.quartz.controller;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.job.HelloJob;
import com.hgsoft.ecip.quartz.util.SchedulerManager;
import lombok.extern.slf4j.Slf4j;
import org.quartz.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sun.rmi.runtime.Log;

import javax.annotation.Resource;
import java.util.Date;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2018-12-24 下午8:11
 */
@RestController
@Slf4j
public class HelloJobController {

    @Resource
    SchedulerManager schedulerManager;
    @GetMapping("/hello")
    public void helloJob() throws SchedulerException {
        QrtzJobandtrigger qrtzJobandtrigger = new QrtzJobandtrigger();
        qrtzJobandtrigger.setClassName("com.hgsoft.ecip.quartz.job.HelloJob");
        qrtzJobandtrigger.setName("hellojob1120.2736075844343615sd");
        qrtzJobandtrigger.setGroupName("hellojob0.46898508625807667");
        qrtzJobandtrigger.setCronExpression("1 * * ? * *");
        Date date =new Date();
        qrtzJobandtrigger.setStartTime(date.getTime());
        qrtzJobandtrigger.setHasEndTime(false);
        qrtzJobandtrigger.setStatus(1);
        qrtzJobandtrigger.setTaskDescription("hellowrldjob");
        qrtzJobandtrigger.setTriggerDescription("jdjdjdjdj");
        log.info(schedulerManager.deleteJob(new JobKey(qrtzJobandtrigger.getName(), qrtzJobandtrigger.getGroupName()))+"");
    }
}
