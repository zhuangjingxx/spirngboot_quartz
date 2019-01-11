package com.hgsoft.ecip.quartz.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * @author zhuangjing
 * @ClassName
 * @Description: <p>
 * </p>
 * @date 2018-12-25 上午11:07
 */

@Service
@Slf4j
public class HelloJobService {
    public void hello(){
        log.info("hello");
    }
}
