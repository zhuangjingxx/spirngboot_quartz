package com.hgsoft.ecip.quartz.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author zhuangjing
 * @since 2019-01-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("qrtz_jobAndTrigger")
public class QrtzJobandtrigger implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String name;

    @TableField("groupName")
    private String groupName;

    @TableField("className")
    private String className;

    @TableField("taskDescription")
    private String taskDescription;

    @TableField("cronExpression")
    private String cronExpression;

    @TableField("configSel")
    private String configSel;

    @TableField("oneTimeExecTime")
    private Long oneTimeExecTime;

    @TableField("secondTypeSel")
    private String secondTypeSel;

    @TableField("minuteTypeSel")
    private String minuteTypeSel;

    @TableField("hourTypeSel")
    private String hourTypeSel;

    @TableField("dayTypeSel")
    private String dayTypeSel;

    @TableField("monthTypeSel")
    private String monthTypeSel;

    @TableField("weekTypeSel")
    private String weekTypeSel;

    @TableField("startTime")
    private Long startTime;

    @TableField("hasEndTime")
    private Boolean hasEndTime;

    @TableField("endTime")
    private Long endTime;

    private Integer status;

    @TableField("triggerDescription")
    private String triggerDescription;

    private Long createdAt;

    private Long deletedAt;

    @TableField("lasttime")
    private Long lasttime;


}
