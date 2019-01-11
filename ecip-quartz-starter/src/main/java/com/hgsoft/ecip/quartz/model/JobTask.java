package com.hgsoft.ecip.quartz.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

/**
 * @author 庄敬
 * @ClassName  JobTask
 * @Description:
 * <p>
 *     与前端页面的表格显示适配的类
 * </p>
 * @date 2018-12-25 下午2:06
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobTask {
    private Integer id;
    private String name;
    private String group;
    private String lasttime;
    private String nexttime;
    private String status;
}
