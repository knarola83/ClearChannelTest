Feature: LogIn

  As a user I wanted to Login successfully on http://the-internet.herokuapp.com/login so I can access the homepage
  @login
  Scenario: To verify user should able to login successfully after entering correct credentials

    Given user is on the login page of http://the-internet.herokuapp.com/login
    When  the correct user credential "tomsmith"is entered in username field
    And the correct password "SuperSecretPassword!" is entered in password field
    And click on Login button
    Then user is able to navigate on secure area of login page
  @inValidLogin
    Scenario: : To verify user should not be able to login with invalid credentials
      Given user is on the login page of http://the-internet.herokuapp.com/login
      When  the inValid user credential "TomSmith"is entered in username field
      And the inValid password "SuperSecretPassword" is entered in password field
      And click on Login button
      Then user is not able to navigate on secure area of login page

