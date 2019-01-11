package com.hgsoft.ecip.quartz.service.impl;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.hgsoft.ecip.quartz.mapper.QrtzJobandtriggerMapper;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;
import com.hgsoft.ecip.quartz.service.QrtzJobandtriggerService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zhuangjing
 * @since 2019-01-08
 */
@Service
public class QrtzJobandtriggerServiceImpl extends ServiceImpl<QrtzJobandtriggerMapper, QrtzJobandtrigger> implements QrtzJobandtriggerService {
    @Resource
    QrtzJobandtriggerMapper qrtzJobandtriggerMapper;

    @Override
    public JobAndTriggerModel findJobAndTriggerModelById(Integer id) {
        return qrtzJobandtriggerMapper.findJobAndTriggerModel(id);
    }

    @Override
    public QrtzJobandtrigger findJobAndTriggerByJobKey(String name, String groupName) {
        return qrtzJobandtriggerMapper.findJobAndTriggerByJodKey(name, groupName);
    }


}
