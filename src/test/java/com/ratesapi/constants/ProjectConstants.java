package com.ratesapi.constants;

import java.io.File;

public class ProjectConstants {
    public static final String CURRENT_PATH = new File("").getAbsolutePath();
    public static final String REPORT_PATH = CURRENT_PATH + "/reports/";
    public static final String URL = "https://api.ratesapi.io/api/";
    public static final String INVALIDURL = "https://api.ratesapi.io/api/123";
    public static final String OTHERDATE = "2010-01-12";
    public static final String LATESTDATE = "latest";
    public static final String FUTUREDATE = "2021-01-12";
}
