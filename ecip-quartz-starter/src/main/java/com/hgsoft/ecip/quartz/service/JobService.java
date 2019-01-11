package com.hgsoft.ecip.quartz.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;
import com.hgsoft.ecip.quartz.model.JobTask;
import com.sun.javafx.image.impl.IntArgb;
import org.quartz.JobKey;
import org.springframework.stereotype.Service;

@Service
public interface JobService {
    public boolean addSimpleJob(JobAndTriggerModel jobAndTriggerModel);

    public boolean addCronJob(JobAndTriggerModel jobAndTriggerModel);

    public boolean deleteJobById(Integer id);

    public boolean updateJob(Integer id,JobAndTriggerModel jobAndTriggerModel);

    public IPage<JobTask> getJobTaskPage(IPage<JobTask> jobTaskIPage, String name, String groupName,Integer statusType);

    public boolean checkJobKey(JobKey jobKey);

    public JobAndTriggerModel findJobAndTriggerModelById(Integer id);
}
