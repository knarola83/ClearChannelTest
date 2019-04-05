package com.clearchannelinternational;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

public class Hooks extends Utils {
    BrowserSelectore browserSelectore = new BrowserSelectore();

    @Before
    public void driverSetup(){
        // set up browsers to run the test
        browserSelectore.browserSelect();

        // Implicitly Wait for Driver
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);

        //Maximising Browser
        driver.manage().window().fullscreen();

        driver.manage().deleteAllCookies();

    }
    //close browser
    @After
    public void tearDown() {
        driver.quit();
    }

}
