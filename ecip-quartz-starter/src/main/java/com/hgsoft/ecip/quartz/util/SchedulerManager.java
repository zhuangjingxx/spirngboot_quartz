package com.hgsoft.ecip.quartz.util;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;
import lombok.extern.slf4j.Slf4j;
import org.quartz.*;
import org.quartz.impl.JobDetailImpl;
import org.quartz.impl.triggers.CronTriggerImpl;
import org.quartz.impl.triggers.SimpleTriggerImpl;

import org.springframework.integration.channel.PublishSubscribeChannel;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.text.ParseException;
import java.util.Date;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2019-01-06 上午11:25
 */
@Component
@Slf4j
public class SchedulerManager {
    @Resource
    private Scheduler scheduler;

    /**
     * 添加一个执行一次的简单任务
     */
    public boolean addSimpleJob(JobAndTriggerModel jobAndTriggerModel) {

        JobDetailImpl jobDetail = getJobDetail(jobAndTriggerModel);
        if (jobDetail == null){
            return false;
        }

        SimpleTriggerImpl simpleTrigger = new SimpleTriggerImpl();
        simpleTrigger.setName(jobAndTriggerModel.getName());
        simpleTrigger.setGroup(jobAndTriggerModel.getGroupName());
        simpleTrigger.setStartTime(new Date(jobAndTriggerModel.getOneTimeExecTime()));
        if (jobAndTriggerModel.getDataKeys() != null){
            JobDataMap jobDataMap = new JobDataMap();
            for (int i=0; i<jobAndTriggerModel.getDataKeys().size(); i++){
                jobDataMap.put(jobAndTriggerModel.getDataKeys().get(i), jobAndTriggerModel.getDataValues().get(i));
            }
            simpleTrigger.setJobDataMap(jobDataMap);
        }
        try {
            scheduler.scheduleJob(jobDetail, simpleTrigger);
        } catch (SchedulerException e) {
            log.error("调度器发生错误，分配任务失败");
            return false;
        }

        return true;
    }

    /**
     * 添加一个cron任务
     *
     * @param jobAndTriggerModel
     */
    public boolean addCronJob(JobAndTriggerModel jobAndTriggerModel)  {
        JobDetailImpl jobDetail = getJobDetail(jobAndTriggerModel);
        if (jobDetail == null){
            return false;
        }
        CronTriggerImpl cronTrigger = new CronTriggerImpl();
        cronTrigger.setName(jobAndTriggerModel.getName());
        cronTrigger.setGroup(jobAndTriggerModel.getGroupName());
        cronTrigger.setDescription(jobAndTriggerModel.getTriggerDescription());
        cronTrigger.setStartTime(new Date(jobAndTriggerModel.getStartTime()));
        if (jobAndTriggerModel.getHasEndTime()) {
            cronTrigger.setEndTime(new Date(jobAndTriggerModel.getEndTime()));
        }
        if (jobAndTriggerModel.getDataKeys() != null){
            JobDataMap jobDataMap = new JobDataMap();
            for (int i=0; i<jobAndTriggerModel.getDataKeys().size(); i++){
                jobDataMap.put(jobAndTriggerModel.getDataKeys().get(i), jobAndTriggerModel.getDataValues().get(i));
            }
            cronTrigger.setJobDataMap(jobDataMap);
        }
        try {
            cronTrigger.setCronExpression(jobAndTriggerModel.getCronExpression());
        } catch (ParseException e) {
            log.error("cron表达式错误");
            return false;
        }

        try {
            scheduler.scheduleJob(jobDetail, cronTrigger);
        } catch (SchedulerException e) {
            log.info("调度器发生错误，分配任务失败");
            return false;
        }

        return true;
    }

    /**
     * 创建一个任务实例
     * @param qrtzJobandtrigger
     * @return
     */
    private JobDetailImpl getJobDetail(QrtzJobandtrigger qrtzJobandtrigger){
        JobDetailImpl jobDetail = new JobDetailImpl();
        if (JobClassUtil.getJobClass(qrtzJobandtrigger.getClassName()) == null){
            return null;
        }
        jobDetail.setJobClass(JobClassUtil.getJobClass(qrtzJobandtrigger.getClassName()));
        jobDetail.setName(qrtzJobandtrigger.getName());
        jobDetail.setGroup(qrtzJobandtrigger.getGroupName());
        if (qrtzJobandtrigger.getTaskDescription() != null) {
            jobDetail.setDescription(qrtzJobandtrigger.getTaskDescription());
        }
        return jobDetail;
    }

    /**
     * 删除一个任务
     * @param jobKey
     * @return
     */
    public boolean deleteJob(JobKey jobKey){
        boolean res = false;
        try {
            res = scheduler.deleteJob(jobKey);
        } catch (SchedulerException e) {
            log.error("调度器发生错误，删除失败");
            return false;
        }
        return res;
    }

    /**
     * 更新一个任务
     * @param old
     * @param jobAndTriggerModel
     * @return
     */
    public boolean updateJob(JobKey old, JobAndTriggerModel jobAndTriggerModel){
        if (deleteJob(old) == false) {
            return false;
        }
        if (jobAndTriggerModel.getConfigSel().equals("1")){
            if (addSimpleJob(jobAndTriggerModel) == false){
                return false;
            }
        }else{
            if (addCronJob(jobAndTriggerModel) == false){
                return false;
            }
        }
        return true;
    }

    /**
     * 获得一个corn触发器
     * @param triggerKey
     * @return
     */
    public Trigger getTrigger(TriggerKey triggerKey){
        Trigger trigger =null;
        try {
            trigger = scheduler.getTrigger(triggerKey);
        } catch (SchedulerException e) {
            log.error("改触发器不存在，获取失败");
            return null;
        }
        return trigger;
    }


    public String getTriggrStatus(TriggerKey triggerKey){
        Trigger.TriggerState triggerState = null;
        try {
            triggerState = scheduler.getTriggerState(triggerKey);
        } catch (SchedulerException e) {
            log.error("获取触发器状态时发生错误");
        }
        return TriggerStatusToString.getTriggerStatus(triggerState);
    }

}
