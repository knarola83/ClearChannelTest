$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFile/LogIn.feature");
formatter.feature({
  "line": 1,
  "name": "LogIn",
  "description": "\r\nAs a user I wanted to Login successfully on http://the-internet.herokuapp.com/login so I can access the homepage",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30482054705,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "To verify user should able to login successfully after entering correct credentials",
  "description": "",
  "id": "login;to-verify-user-should-able-to-login-successfully-after-entering-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the login page of http://the-internet.herokuapp.com/login",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the correct user credential \"tomsmith\"is entered in username field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the correct password \"SuperSecretPassword!\" is entered in password field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is able to navigate on secure area of login page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheLoginPageOfHttpTheInternetHerokuappComLogin()"
});
formatter.result({
  "duration": 1549534402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.theCorrectUserCredentialIsEnteredInUsernameField(String)"
});
formatter.result({
  "duration": 706115812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.theCorrectPasswordIsEnteredInPasswordField(String)"
});
formatter.result({
  "duration": 206681988,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 1371757317,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsAbleToNavigateOnSecureAreaOfLoginPage()"
});
formatter.result({
  "duration": 130844355,
  "status": "passed"
});
formatter.after({
  "duration": 622041688,
  "status": "passed"
});
formatter.before({
  "duration": 6872450926,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": ": To verify user should not be able to login with invalid credentials",
  "description": "",
  "id": "login;:-to-verify-user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@inValidLogin"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on the login page of http://the-internet.herokuapp.com/login",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the inValid user credential \"TomSmith\"is entered in username field",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the inValid password \"SuperSecretPassword\" is entered in password field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is not able to navigate on secure area of login page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheLoginPageOfHttpTheInternetHerokuappComLogin()"
});
formatter.result({
  "duration": 86808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomSmith",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.theInValidUserCredentialIsEnteredInUsernameField(String)"
});
formatter.result({
  "duration": 222414748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.theInValidPasswordIsEnteredInPasswordField(String)"
});
formatter.result({
  "duration": 215721131,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 614119075,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsNotAbleToNavigateOnSecureAreaOfLoginPage()"
});
formatter.result({
  "duration": 676576312,
  "status": "passed"
});
formatter.after({
  "duration": 1306500418,
  "status": "passed"
});
});