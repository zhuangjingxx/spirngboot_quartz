package com.hgsoft.ecip.quartz.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;
import com.hgsoft.ecip.quartz.model.JobTask;
import com.hgsoft.ecip.quartz.service.JobService;
import com.hgsoft.ecip.quartz.service.QrtzJobandtriggerService;
import com.hgsoft.ecip.quartz.util.SchedulerManager;
import org.quartz.JobDataMap;
import org.quartz.JobKey;
import org.quartz.Trigger;
import org.quartz.TriggerKey;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2019-01-06 下午7:23
 */
@Service
public class JobServiceImpl implements JobService {
    @Resource
    SchedulerManager schedulerManager;
    @Resource
    QrtzJobandtriggerService qrtzJobandtriggerService;
    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Override
    public boolean addSimpleJob(JobAndTriggerModel jobAndTriggerModel) {
        if (checkJobKey(new JobKey(jobAndTriggerModel.getName(), jobAndTriggerModel.getGroupName())) == true) {
            return false;
        }
        jobAndTriggerModel.setStatus(1);
        jobAndTriggerModel.setCreatedAt(new Date().getTime());
        qrtzJobandtriggerService.save(jobAndTriggerModel);
        return schedulerManager.addSimpleJob(jobAndTriggerModel);
    }

    @Override
    public boolean addCronJob(JobAndTriggerModel jobAndTriggerModel) {
        if (checkJobKey(new JobKey(jobAndTriggerModel.getName(), jobAndTriggerModel.getGroupName())) == true) {
            return false;
        }
        jobAndTriggerModel.setStatus(1);
        jobAndTriggerModel.setCreatedAt(new Date().getTime());
        qrtzJobandtriggerService.save(jobAndTriggerModel);
        return schedulerManager.addCronJob(jobAndTriggerModel);
    }

    /**
     * 检查对应的jobKey是否已经存在
     *
     * @param jobKey
     * @return 存在则返回true，否则返回false
     */
    public boolean checkJobKey(JobKey jobKey) {
        QueryWrapper<QrtzJobandtrigger> jobAndTriggerModelQueryWrapper = new QueryWrapper<>();
        jobAndTriggerModelQueryWrapper = jobAndTriggerModelQueryWrapper.eq("status", 1)
            .eq("name", jobKey.getName())
            .eq("groupName", jobKey.getGroup());
        int count = qrtzJobandtriggerService.count(jobAndTriggerModelQueryWrapper);
        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteJobById(Integer id) {
        QrtzJobandtrigger qrtzJobandtrigger = qrtzJobandtriggerService.getById(id);
        if (qrtzJobandtrigger.getStatus() == 0) {
            return false;
        }
        qrtzJobandtrigger.setStatus(0);
        qrtzJobandtrigger.setDeletedAt(new Date().getTime());
        qrtzJobandtriggerService.update(qrtzJobandtrigger, new QueryWrapper<QrtzJobandtrigger>().eq("id", id));
        JobKey jobKey = new JobKey(qrtzJobandtrigger.getName(), qrtzJobandtrigger.getGroupName());
        return schedulerManager.deleteJob(jobKey);
    }


    @Override
    public boolean updateJob(Integer id, JobAndTriggerModel jobAndTriggerModel) {
        QrtzJobandtrigger oldjobAndTriggerModel = qrtzJobandtriggerService.getById(id);
        QueryWrapper<QrtzJobandtrigger> queryWrapper = new QueryWrapper();
        qrtzJobandtriggerService.update(jobAndTriggerModel, queryWrapper.eq("id", id));
        JobKey oldJob = new JobKey(oldjobAndTriggerModel.getName(), oldjobAndTriggerModel.getGroupName());
        return schedulerManager.updateJob(oldJob, jobAndTriggerModel);
    }


    /**
     * 获取任务分页列表
     *
     * @param jobTaskIPage
     * @return
     */
    @Override
    public IPage<JobTask> getJobTaskPage(IPage<JobTask> jobTaskIPage, String name, String groupName, Integer statusType) {
        IPage<QrtzJobandtrigger> qrtzJobandtriggerIPage = new Page<>();
        qrtzJobandtriggerIPage.setSize(jobTaskIPage.getSize());
        qrtzJobandtriggerIPage.setCurrent(jobTaskIPage.getCurrent());
        QueryWrapper<QrtzJobandtrigger> jobAndTriggerModelQueryWrapper = new QueryWrapper<>();
        if (name != null) {
            jobAndTriggerModelQueryWrapper = jobAndTriggerModelQueryWrapper.like("name", "%" + name + "%");
        }
        if (groupName != null) {
            jobAndTriggerModelQueryWrapper = jobAndTriggerModelQueryWrapper.like("groupName", "%" + groupName + "%");
        }
        if (statusType != null) {
            jobAndTriggerModelQueryWrapper = jobAndTriggerModelQueryWrapper.eq("status", statusType);
        }
        jobAndTriggerModelQueryWrapper = jobAndTriggerModelQueryWrapper.ne("status", 0);
        qrtzJobandtriggerIPage = qrtzJobandtriggerService.page(qrtzJobandtriggerIPage, jobAndTriggerModelQueryWrapper);
        List<QrtzJobandtrigger> qrtzJobandtriggers = qrtzJobandtriggerIPage.getRecords();
        List<JobTask> jobTasks = new LinkedList<>();
        Iterator<QrtzJobandtrigger> iterator = qrtzJobandtriggers.iterator();
        while (iterator.hasNext()) {
            QrtzJobandtrigger jobAndTrigger = iterator.next();
            JobTask jobTask = new JobTask();
            jobTask.setId(jobAndTrigger.getId());
            jobTask.setName(jobAndTrigger.getName());
            jobTask.setGroup(jobAndTrigger.getGroupName());
            if (jobAndTrigger.getStatus() == 1) {
                //任务还没执行完成
                TriggerKey triggerKey = new TriggerKey(jobTask.getName(), jobTask.getGroup());
                Trigger trigger = schedulerManager.getTrigger(triggerKey);
                if (trigger == null) {
                    //表明任务最后一次执行因为调度器关闭而错过了执行时间
                    jobTask.setNexttime("");
                    jobAndTrigger.setStatus(2);
                    if (jobAndTrigger.getLasttime() == null) {
                        jobAndTrigger.setLasttime(-1L);
                        jobTask.setLasttime("任务错过了执行时间");
                        jobTask.setStatus("执行完成");
                    } else {
                        jobTask.setLasttime(simpleDateFormat.format(new Date(jobAndTrigger.getLasttime())));
                        jobTask.setStatus("执行完成");
                    }
                    qrtzJobandtriggerService.updateById(jobAndTrigger);
                } else{
                    jobTask.setStatus(schedulerManager.getTriggrStatus(triggerKey));
                    Date lastTime = trigger.getPreviousFireTime();
                    if (lastTime != null) {
                        jobTask.setLasttime(simpleDateFormat.format(lastTime));
                    } else {
                        jobTask.setLasttime("任务还没有触发");
                    }
                    Date nextTime = trigger.getNextFireTime();
                    jobTask.setNexttime(simpleDateFormat.format(nextTime));
                }


            } else if (jobAndTrigger.getStatus() == 2) {
                //任务已经执行完成了
                if (jobAndTrigger.getLasttime() == -1) {
                    jobTask.setLasttime("任务错过了执行");
                    jobTask.setStatus("执行完成");
                    jobTask.setNexttime("");
                } else{
                    jobTask.setLasttime(simpleDateFormat.format(new Date(jobAndTrigger.getLasttime())));
                    jobTask.setStatus("执行完成");
                }

            }

            jobTasks.add(jobTask);
        }
        jobTaskIPage.setTotal(qrtzJobandtriggerIPage.getTotal());
        jobTaskIPage.setRecords(jobTasks);
        return jobTaskIPage;
    }

    @Override
    public JobAndTriggerModel findJobAndTriggerModelById(Integer id) {
        JobAndTriggerModel jobAndTriggerModel = qrtzJobandtriggerService.findJobAndTriggerModelById(id);
        Trigger trigger = schedulerManager.getTrigger(new TriggerKey(jobAndTriggerModel.getName(), jobAndTriggerModel.getGroupName()));
        JobDataMap jobDataMap = trigger.getJobDataMap();
        List<String> dataKeys = new LinkedList<>();
        List<String> dataValues = new LinkedList<>();
        if (jobDataMap != null) {
            String keys[] = jobDataMap.getKeys();
            for (int i = 0; i < keys.length; i++) {
                dataKeys.add(keys[i]);
                dataValues.add((String) jobDataMap.get(keys[i]));
            }
        }
        jobAndTriggerModel.setDataKeys(dataKeys);
        jobAndTriggerModel.setDataValues(dataValues);
        return jobAndTriggerModel;
    }
}
