import com.hgsoft.EcipQuartzApplication;
import com.hgsoft.ecip.quartz.job.HelloJob;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.quartz.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = EcipQuartzApplication.class)

@Slf4j
public class QuartzSpringbootDemo2ApplicationTests {

    @Resource
    private Scheduler scheduler;
    @Test
    public void testHelloJobClass() throws SchedulerException {
        JobDetail jobDetail = JobBuilder.newJob(HelloJob.class)
            .withIdentity("hellojob2", "hellogroup")
            .withDescription("这是hellojob任务实例")
            .build();
        Trigger trigger = TriggerBuilder.newTrigger()
            .startNow()
            .withIdentity(jobDetail.getKey().getName(),jobDetail.getKey().getGroup())
            .withSchedule(SimpleScheduleBuilder.repeatSecondlyForever(5))
            .build();
        scheduler.scheduleJob(jobDetail,trigger);
    }
}

