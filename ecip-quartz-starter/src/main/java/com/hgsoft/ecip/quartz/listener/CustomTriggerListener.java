package com.hgsoft.ecip.quartz.listener;

import org.quartz.JobExecutionContext;
import org.quartz.Trigger;
import org.quartz.TriggerListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * description:
 * @author  : PanNaiZhao
 * date: 2016/2/25.
 * file: CustomTriggerListener
 */

@Component(value = "tirggerListener")
public class CustomTriggerListener implements TriggerListener {
    private static final Logger logger = LoggerFactory.getLogger(CustomTriggerListener.class);
    @Override
    public String getName() {
        return "CustomTriggerListener";
    }

    @Override
    public void triggerFired(Trigger trigger, JobExecutionContext context) {
        logger.debug("\n执行方法：triggerFired(Trigger trigger, JobExecutionContext context)，" +
                "任务：" + context.getJobDetail().getKey().toString() + "被执行," +
                "触发器：" + context.getTrigger().getKey().toString() +
                "已触发,触发时间：" + context.getFireTime() + "\n");
    }

    @Override
    public boolean vetoJobExecution(Trigger trigger, JobExecutionContext context) {
        logger.debug("\n执行方法：vetoJobExecution(Trigger trigger, JobExecutionContext context)，return false(Trigger触发后，job执行时调用本方法。true即否决，job后面不执行)");
        //Trigger触发后，job执行时调用本方法。true即否决，job后面不执行。
        return false;
    }

    @Override
    public void triggerMisfired(Trigger trigger) {
        logger.debug("\n执行方法：triggerMisfired(Trigger trigger)，" +
                "触发器：" + trigger.getKey().toString() +
                "错过触发,错过触发的恢复策略：" + trigger.getMisfireInstruction() + "\n");
    }

    @Override
    public void triggerComplete(Trigger trigger, JobExecutionContext context, Trigger.CompletedExecutionInstruction triggerInstructionCode) {
        logger.debug("\n执行方法：triggerComplete(Trigger trigger, JobExecutionContext context, Trigger.CompletedExecutionInstruction triggerInstructionCode)，" +

                "任务：" + context.getTrigger().getKey().toString() +"被执行，"+
                "触发器：" + trigger.getKey().toString() +
                "Trigger.CompletedExecutionInstruction：" + triggerInstructionCode + "\n");
    }


}
