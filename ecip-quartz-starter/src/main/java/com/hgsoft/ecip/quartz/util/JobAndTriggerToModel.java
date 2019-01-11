package com.hgsoft.ecip.quartz.util;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2019-01-09 下午7:58
 */
public class JobAndTriggerToModel {
    public static JobAndTriggerModel obAndTriggerToModel(QrtzJobandtrigger jobandtrigger) {
        JobAndTriggerModel jobAndTriggerModel = new JobAndTriggerModel();
        jobAndTriggerModel.setName(jobandtrigger.getName());
        jobAndTriggerModel.setGroupName(jobandtrigger.getGroupName());
        jobAndTriggerModel.setClassName(jobandtrigger.getClassName());
        if (jobandtrigger.getTaskDescription() != null){
            jobAndTriggerModel.setTaskDescription(jobandtrigger.getTaskDescription());
        }
        jobAndTriggerModel.setConfigSel(jobandtrigger.getConfigSel());
        if (jobandtrigger.getConfigSel() == "1"){
            jobAndTriggerModel.setOneTimeExecTime(jobandtrigger.getOneTimeExecTime());
        } else if (jobandtrigger.getConfigSel() == "2"){

        } else{

        }
        return jobAndTriggerModel;
    }
}
