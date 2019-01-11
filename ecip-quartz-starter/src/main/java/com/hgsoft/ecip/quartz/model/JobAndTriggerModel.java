package com.hgsoft.ecip.quartz.model;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import lombok.Data;

import java.util.List;

/**
 * @author zhuangjing
 * @ClassName
 * @Description:
 * <p>
 *    用来接收前端添加一个任务传来的参数
 * </p>
 * @date 2019-01-08 下午12:13
 */
@Data
public class JobAndTriggerModel extends  QrtzJobandtrigger{
    private List<String> dataKeys;
    private List<String> dataValues;
}
