package com.hgsoft.ecip.quartz.mapper;

import com.hgsoft.ecip.quartz.entity.QrtzJobandtrigger;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hgsoft.ecip.quartz.model.JobAndTriggerModel;
import org.apache.ibatis.annotations.Param;
import org.quartz.JobKey;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zhuangjing
 * @since 2019-01-08
 */
public interface QrtzJobandtriggerMapper extends BaseMapper<QrtzJobandtrigger> {
    public JobAndTriggerModel findJobAndTriggerModel(Integer id);

    public QrtzJobandtrigger findJobAndTriggerByJodKey(@Param("name") String name, @Param("groupName") String groupName);
}
