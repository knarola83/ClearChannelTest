package com.clearchannelinternational;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class MyStepdefs extends Utils{
    LogInPage logInPage = new LogInPage();

    @Given("^user is on the login page of http://the-internet\\.herokuapp\\.com/login$")
    public void userIsOnTheLoginPageOfHttpTheInternetHerokuappComLogin() {
    }

    @When("^the correct user credential \"([^\"]*)\"is entered in username field$")
    public void theCorrectUserCredentialIsEnteredInUsernameField(String arg0) {
    logInPage.enterUserName();
    }

    @And("^the correct password \"([^\"]*)\" is entered in password field$")
    public void theCorrectPasswordIsEnteredInPasswordField(String arg0) {
    logInPage.enterPassword();
    }

    @And("^click on Login button$")
    public void clickOnLoginButton() {
logInPage.clickOnLogInButton();
    }

    @Then("^user is able to navigate on secure area of login page$")
    public void userIsAbleToNavigateOnSecureAreaOfLoginPage() {
        Utils.assertByGetText("Welcome to the Secure Area. When you are done click logout below.", By.className("subheader"),
                "Sorry your login is not successful");
    }

    @When("^the inValid user credential \"([^\"]*)\"is entered in username field$")
    public void theInValidUserCredentialIsEnteredInUsernameField(String arg0)  {
       logInPage.enterInValidUserName();
    }

    @And("^the inValid password \"([^\"]*)\" is entered in password field$")
    public void theInValidPasswordIsEnteredInPasswordField(String arg0)  {
        logInPage.enterInValidPassword();
    }

    @Then("^user is not able to navigate on secure area of login page$")
    public void userIsNotAbleToNavigateOnSecureAreaOfLoginPage() {
        Utils.assertByGetText("Your username is invalid!\n" +
                "×",By.xpath("//*[@id=\"flash\"]"), "LogIn Failed");
    }
}
