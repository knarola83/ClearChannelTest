$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFile/LogIn.feature");
formatter.feature({
  "line": 1,
  "name": "LogIn",
  "description": "\r\nAs a user I wanted to Login successfully on http://the-internet.herokuapp.com/login so I can access the homepage",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8098265723,
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
  "duration": 434370210,
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
  "duration": 105012794,
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
  "duration": 140813583,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 737429528,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsNotAbleToNavigateOnSecureAreaOfLoginPage()"
});
formatter.result({
  "duration": 54451665,
  "status": "passed"
});
formatter.after({
  "duration": 630661758,
  "status": "passed"
});
});