package com.clearchannelinternational;

import org.openqa.selenium.By;

public class LogInPage extends Utils {

    LoadProperty loadProperty = new LoadProperty();

    By userNameField = By.id("username");
    By passwordField = By.id("password");
    By logInButton = By.className("radius");

    // Enter username in username field
    public void enterUserName() {
        enterText(userNameField, loadProperty.getProperty("userName"));
    }

    //enter password in password field
    public void enterPassword() {

        enterText(passwordField, loadProperty.getProperty("password"));
    }

    //click on login button
    public void clickOnLogInButton() {

        clickOnElement(logInButton);
    }

    // enter invalid username in username field
    public void enterInValidUserName() {
        enterText(userNameField, loadProperty.getProperty("inValidUserName"));
    }

    //enter invalid password in password field
    public void enterInValidPassword() {
        enterText(passwordField, loadProperty.getProperty("inValidPassword"));
    }
}
