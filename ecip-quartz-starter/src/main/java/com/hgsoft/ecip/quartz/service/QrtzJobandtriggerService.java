package com.hgsoft.ecip.quartz.service;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.baomidou.mybatisplus.extension.service.IService;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zhuangjing
 * @since 2019-01-08
 */
public interface QrtzJobandtriggerService extends IService<QrtzJobandtrigger> {

    public JobAndTriggerModel findJobAndTriggerModelById(Integer id);

    public QrtzJobandtrigger findJobAndTriggerByJobKey(String name, String groupName);
}
