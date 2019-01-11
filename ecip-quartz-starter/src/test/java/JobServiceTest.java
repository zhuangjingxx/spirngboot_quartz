import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.hgsoft.EcipQuartzApplication;
import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.model.JobTask;
import com.hgsoft.ecip.quartz.service.JobService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.quartz.JobKey;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import sun.rmi.runtime.Log;

import javax.annotation.Resource;
import java.util.Calendar;
import java.util.Date;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2019-01-06 下午8:58
 */
@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest(classes = EcipQuartzApplication.class)
public class JobServiceTest {
//    @Resource
//    JobService jobService;
//    private QrtzJobandtrigger qrtzJobandtrigger1;
//    @Before
//    public void testBefore(){
//        qrtzJobandtrigger1 = new QrtzJobandtrigger();
//        qrtzJobandtrigger1.setClassName("com.hgsoft.ecip.quartz.job.HelloJob");
//        qrtzJobandtrigger1.setName("heheda9");
//        qrtzJobandtrigger1.setGroupName("hellojob");
//        Date date =new Date();
//        date.setMinutes(date.getMinutes()+1);
//        qrtzJobandtrigger1.setOneTimeExecTime(date.getTime());
//        qrtzJobandtrigger1.setTaskDescription("hellowrldjob223488888");
//        qrtzJobandtrigger1.setTriggerDescription("jdjdjdjdjqwqw224");
//
//    }
//    @Test
//    public void testAddSimpleJob(){
//        log.info(jobService.addSimpleJob()+"");
//    }
//
//    @Test
//    public void testUpdateJob(){
//        log.info(jobService.updateJob(24, )+"");
//    }
//
//    @Test
//    public void testDeleteJob(){
//        log.info(jobService.deleteJobById(13)+"");
//    }
//
//    @Test
//    public void testGetJobTaskPage(){
//        jobService.addSimpleJob();
//        IPage<JobTask> jobTaskIPage = new Page<>();
//        jobTaskIPage.setCurrent(1);
//        jobTaskIPage.setSize(10);
//        jobTaskIPage = jobService.getJobTaskPage(jobTaskIPage);
//        log.info(jobTaskIPage.getRecords().toString());
//    }
}
