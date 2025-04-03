package com.myTraining.core.models;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.myTraining.core.services.CustomConfig;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.Optional;

@Model(adaptables = Resource.class)
public class Test {

    @OSGiService
    CustomConfig ci;
    @PostConstruct
    protected void init() {
       String s= ci.getUserName();
    }

}
