package com.hgsoft.ecip.quartz.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;
import com.hgsoft.ecip.quartz.model.JobTask;
import com.hgsoft.ecip.quartz.service.JobService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.print.attribute.standard.JobStateReason;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zhuangjing
 * @since 2019-01-08
 */
@RestController
@Slf4j
@RequestMapping("/qrtzJobandtrigger")
public class QrtzJobandtriggerController {

    @Resource
    private JobService jobService;

    @PostMapping("/addSimpleJob")
    public Boolean addSimpleJob(@RequestBody  JobAndTriggerModel jobAndTriggerModel){
        return jobService.addSimpleJob(jobAndTriggerModel);
    }

    @PostMapping("/addCronJob")
    public Boolean addCronJob(@RequestBody JobAndTriggerModel jobAndTriggerModel){
        return jobService.addCronJob(jobAndTriggerModel);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteJobById(@PathVariable Integer id){
        return jobService.deleteJobById(id);
    }

    @PutMapping("/{id}")
    public Boolean updateJob(@RequestBody JobAndTriggerModel jobAndTriggerModel, @PathVariable Integer id){
        return jobService.updateJob(id,jobAndTriggerModel);
    }

    @GetMapping("/jobTaskPageList")
    public IPage<JobTask> getJobTaskPageList(IPage<JobTask> jobTaskIPage, String name, String groupName, Integer statusType){
        return jobService.getJobTaskPage(jobTaskIPage,name,groupName,statusType);
    }

    @GetMapping("/{id}")
    public JobAndTriggerModel findJobAndTriggerModelById(@PathVariable Integer id){
        return jobService.findJobAndTriggerModelById(id);
    }

    @PostMapping ("/hello")
    public void hello(@RequestBody JobTask jobTask) throws IOException {
        log.info(jobTask.getName());
    }

}

