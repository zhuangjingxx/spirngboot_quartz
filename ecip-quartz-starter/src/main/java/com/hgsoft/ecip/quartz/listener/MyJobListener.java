package com.hgsoft.ecip.quartz.listener;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.service.JobService;
import com.hgsoft.ecip.quartz.service.QrtzJobandtriggerService;
import com.hgsoft.ecip.quartz.util.SchedulerManager;
import lombok.extern.slf4j.Slf4j;
import org.quartz.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Date;

/**
 * description:
 *
 * @author : PanNaiZhao
 * date: 2016/1/26.
 * file: MyJobListener
 */
@Slf4j
@Component(value = "jobListener")
public class MyJobListener implements JobListener {

    @Resource
    private QrtzJobandtriggerService qrtzJobandtriggerService;

    @Override
    public String getName() {
        return "myjoblistener";
    }

    /**
     * 这是job将被执行之前的回调
     *
     * @param jobExecutionContext
     */
    @Override
    public void jobToBeExecuted(JobExecutionContext jobExecutionContext) {

    }

    /**
     * 这是job将被被禁止执行时的回调
     *
     * @param jobExecutionContext
     */
    @Override
    public void jobExecutionVetoed(JobExecutionContext jobExecutionContext) {

    }

    /**
     * 这是job被执行之后的回调
     *
     * @param jobExecutionContext
     */
    @Override
    public void jobWasExecuted(JobExecutionContext jobExecutionContext, JobExecutionException e) {

        //记录任务上一次的触发时间
        JobKey jobKey = jobExecutionContext.getJobDetail().getKey();
        QrtzJobandtrigger jobandtrigger = qrtzJobandtriggerService.findJobAndTriggerByJobKey(jobKey.getName(), jobKey.getGroup());
        if (jobExecutionContext.getNextFireTime() == null){
            jobandtrigger.setStatus(2);
        }
        Date date = new Date();
        jobandtrigger.setLasttime(date.getTime());
        qrtzJobandtriggerService.updateById(jobandtrigger);

    }
}
