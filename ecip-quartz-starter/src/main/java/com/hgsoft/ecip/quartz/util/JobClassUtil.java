package com.hgsoft.ecip.quartz.util;

import jdk.nashorn.internal.ir.ReturnNode;
import lombok.extern.slf4j.Slf4j;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2019-01-06 上午11:49
 */
@Slf4j
public class JobClassUtil {
    public static  Class getJobClass(String className){
        Class job = null;
        try {
            job = Class.forName(className);
        } catch (ClassNotFoundException e) {
            log.error("找不到该任务类名对应的类文件，实例化错误");
            return job;
        }
        return job;
    }
}
