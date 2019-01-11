package com.hgsoft.ecip.quartz.listener;

import org.quartz.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * description:
 * @author  : PanNaiZhao
 * date: 2016/2/25.
 * file: CustomSchedulerListener
 */

@Component(value = "schedulerListener")
public class CustomSchedulerListener implements SchedulerListener {
    private static final Logger logger = LoggerFactory.getLogger(CustomSchedulerListener.class);
    @Override
    public void jobScheduled(Trigger trigger) {
        logger.debug("\n执行方法：jobScheduled(Trigger trigger)，" +
                "Trigger：" + trigger.getKey().toString() + "已计划," + "\n");
    }

    @Override
    public void jobUnscheduled(TriggerKey triggerKey) {
        logger.debug("\n执行方法：jobUnscheduled(TriggerKey triggerKey)，" +
                "TriggerKey：" + triggerKey.toString() + "已脱离计划," + "\n");
    }

    @Override
    public void triggerFinalized(Trigger trigger) {
        logger.debug("\n执行方法：triggerFinalized(Trigger trigger)，" +
                "Trigger：" + trigger.getKey().toString() + "已结束," + "\n");
    }

    @Override
    public void triggerPaused(TriggerKey triggerKey) {
        logger.debug("\n执行方法：triggerPaused(TriggerKey triggerKey)，" +
                "TriggerKey：" + triggerKey.toString() + "已暂停," + "\n");
    }

    @Override
    public void triggersPaused(String triggerGroup) {
        logger.debug("\n执行方法：triggersPaused(String triggerGroup)，" +
                "Trigger组：" + triggerGroup + "已暂停," + "\n");
    }

    @Override
    public void triggerResumed(TriggerKey triggerKey) {
        logger.debug("\n执行方法：triggerResumed(TriggerKey triggerKey)，" +
                "TriggerKey：" + triggerKey.toString() + "已恢复," + "\n");
    }

    @Override
    public void triggersResumed(String triggerGroup) {
        logger.debug("\n执行方法：triggersResumed(String triggerGroup)，" +
                "Trigger组：" + triggerGroup + "已恢复," + "\n");
    }

    @Override
    public void jobAdded(JobDetail jobDetail) {
        logger.debug("\n执行方法：jobAdded(JobDetail jobDetail)，" +
                "JobDetail：" + jobDetail.getKey().toString() + "已添加," + "\n");
    }

    @Override
    public void jobDeleted(JobKey jobKey) {
        logger.debug("\n执行方法：jobDeleted(JobKey jobKey)，" +
                "JobKey：" + jobKey.toString() + "已删除," + "\n");
    }

    @Override
    public void jobPaused(JobKey jobKey) {
        logger.debug("\n执行方法：jobPaused(JobKey jobKey)，" +
                "JobKey：" + jobKey.toString() + "已暂停," + "\n");
    }

    @Override
    public void jobsPaused(String jobGroup) {
        logger.debug("\n执行方法：jobsPaused(String jobGroup)，" +
                "jobGroup：" + jobGroup + "已暂停," + "\n");
    }

    @Override
    public void jobResumed(JobKey jobKey) {
        logger.debug("\n执行方法：jobResumed(JobKey jobKey)，" +
                "JobKey：" + jobKey.toString() + "已恢复," + "\n");
    }

    @Override
    public void jobsResumed(String jobGroup) {
        logger.debug("\n执行方法：jobsResumed(String jobGroup)，" +
                "jobGroup：" + jobGroup + "已恢复," + "\n");
    }

    @Override
    public void schedulerError(String msg, SchedulerException cause) {
        logger.error("\n执行方法：schedulerError(String msg, SchedulerException cause)，scheduler错误，" +
                "msg：" + msg +
                ",SchedulerException:" + cause.getMessage() + "" + "\n");
    }

    @Override
    public void schedulerInStandbyMode() {
        logger.debug("\n执行方法：schedulerInStandbyMode()，scheduler正处于待命模式");
    }

    @Override
    public void schedulerStarted() {
        logger.debug("\n执行方法：schedulerStarted()，scheduler已开启");
    }

    @Override
    public void schedulerStarting() {
        logger.debug("\n执行方法：schedulerStarting()，scheduler正在开启");
    }

    @Override
    public void schedulerShutdown() {
        logger.debug("\n执行方法：schedulerShutdown()，scheduler已关闭");
    }

    @Override
    public void schedulerShuttingdown() {
        logger.debug("\n执行方法：schedulerShuttingdown()，scheduler正在关闭");
    }

    @Override
    public void schedulingDataCleared() {
        logger.debug("\n执行方法：schedulingDataCleared()，schedulingData已被删除");
    }
}
