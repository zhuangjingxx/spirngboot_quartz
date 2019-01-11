package com.hgsoft.ecip.quartz.config;

import com.hgsoft.ecip.quartz.factory.CustomJobFatcory;
import org.quartz.JobListener;
import org.quartz.SchedulerListener;
import org.quartz.TriggerListener;
import org.quartz.spi.JobFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

import javax.annotation.Resource;
import javax.sql.DataSource;

/**
 * @author 庄敬
 * @ClassName  QuartzConfig
 * @Description:
 * <p>
 *     quartz插件的配置类
 * </p>
 * @date 2018-12-24 下午4:45
 */

@Configuration
public class QuartzConfig {
    @Resource
    private JobListener jobListener;
    @Autowired
    private TriggerListener triggerListener;
    @Autowired
    private SchedulerListener schedulerListener;
    @Bean
    public SchedulerFactoryBean schedulerFactoryBean(JobFactory jobFactory , DataSource dataSource ,
                                                     DataSourceTransactionManager dataSourceTransactionManager){
        SchedulerFactoryBean schedulerFactoryBean = new SchedulerFactoryBean();
        schedulerFactoryBean.setJobFactory(jobFactory);
        schedulerFactoryBean.setDataSource(dataSource);
        schedulerFactoryBean.setTransactionManager(dataSourceTransactionManager);
        schedulerFactoryBean.setGlobalJobListeners(jobListener);
//        schedulerFactoryBean.setGlobalTriggerListeners(triggerListener);
//        schedulerFactoryBean.setSchedulerListeners(schedulerListener);
        return  schedulerFactoryBean;
    }


    @Bean
    public JobFactory jobFactory(){
        return new CustomJobFatcory();
    }
}
