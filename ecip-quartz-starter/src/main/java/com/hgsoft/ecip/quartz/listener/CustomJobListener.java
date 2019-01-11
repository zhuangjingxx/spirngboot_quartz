package com.hgsoft.ecip.quartz.listener;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;


/**
 * description:
 * @author  : PanNaiZhao
 * date: 2016/2/25.
 * file: CustomJobListener
 */
@Component
public class CustomJobListener implements JobListener {
    private static final Logger logger = LoggerFactory.getLogger(CustomJobListener.class);
    @Override
    public String getName() {
        return "CustomJobListener";
    }

    @Override
    public void jobToBeExecuted(JobExecutionContext context) {
        logger.debug("\n执行方法：jobToBeExecuted(JobExecutionContext context)，" +
                "任务："+context.getJobDetail().getKey().toString()+"即将被执行,"+
                "执行的触发器："+context.getTrigger().getKey().toString()+
                ",触发时间："+context.getFireTime()+"\n");
    }

    /**
     *  对应Trigger触发后，vetoJobExecution方法返回true或者false。
     *  如果是true,此方法就会被执行
     * @param context
     */
    @Override
    public void jobExecutionVetoed(JobExecutionContext context) {
        logger.debug("\n执行方法：jobExecutionVetoed(JobExecutionContext context)，" +
                "任务：" + context.getJobDetail().getKey().toString() + "被停止执行," +
                "触发器：" + context.getTrigger().getKey().toString() +
                ",触发时间：" + context.getFireTime() + "\n");
    }

    @Override
    public void jobWasExecuted(JobExecutionContext context, JobExecutionException jobException) {
        String exceptionMessage = jobException == null?"":(",运行错误：+"+jobException.getMessage());
        logger.debug("\n执行方法：jobWasExecuted(JobExecutionContext context, JobExecutionException jobException)，" +
                "任务：" + context.getJobDetail().getKey().toString() + "已执行," +
                "触发器：" + context.getTrigger().getKey().toString() +
                ",触发时间：" + context.getFireTime() +exceptionMessage+ "\n");
    }
}
