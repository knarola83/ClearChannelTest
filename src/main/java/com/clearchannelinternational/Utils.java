package com.clearchannelinternational;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Utils extends BasePage {
    //Reusable method for click
    public static void clickOnElement(By by) {
        driver.findElement(by).click();

    }

    //Reusable method for Enter text with SendKey
    public static void enterText(By by, String text) {
        driver.findElement(by).sendKeys(text);
    }

    //Reusable Method For assert
    public static void assertByGetText(String expectedResult, By by, String errorMessage) {

        Assert.assertEquals(expectedResult, driver.findElement(by).getText(), errorMessage);
    }


}
