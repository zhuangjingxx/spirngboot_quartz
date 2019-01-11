package com.hgsoft.ecip.quartz.util;

import org.quartz.Trigger;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2019-01-06 下午8:19
 */
public class TriggerStatusToString {
    public static String getTriggerStatus(Trigger.TriggerState state){
       switch (state){
           case NONE:
               return "任务不存在";
           case NORMAL:
               return "任务正常";
           case PAUSED:
               return "任务暂停";
           case COMPLETE:
               return "任务完成";
           case ERROR:
               return "任务错误";
           case BLOCKED:
               return "任务阻塞";
           default:
               return "";
       }
    }
}
