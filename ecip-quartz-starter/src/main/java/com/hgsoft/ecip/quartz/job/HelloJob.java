package com.hgsoft.ecip.quartz.job;

import com.hgsoft.ecip.quartz.service.HelloJobService;
import lombok.extern.slf4j.Slf4j;
import org.quartz.*;
import org.quartz.impl.JobDetailImpl;
import org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean;

import javax.annotation.Resource;

/**
 * @author 庄敬
 * @ClassName  HelloJob
 * @Description:
 * <p>
 *     测试用的job
 * </p>
 * @date 2018-12-24 下午7:47
 */

@Slf4j
@PersistJobDataAfterExecution
public class HelloJob extends MethodInvokingJobDetailFactoryBean.MethodInvokingJob {

    @Resource
    HelloJobService helloJobService;

    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        helloJobService.hello();
    }
}
