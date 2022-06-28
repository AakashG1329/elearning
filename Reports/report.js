$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/elearning.feature");
formatter.feature({
  "name": "Elearning login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on Submit button",
  "keyword": "When "
});
formatter.step({
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "When "
});
formatter.step({
  "name": "User enter valid Message \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "Aakash1306",
        "123456789",
        "hi"
      ]
    },
    {
      "cells": [
        "jonse1234",
        "123456789",
        "impartent"
      ]
    },
    {
      "cells": [
        "vikkiy1234",
        "123456789",
        "message"
      ]
    }
  ]
});
formatter.background({
  "name": "Background selection",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"Aakash1306\" and password \"123456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_invalid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid Message \"hi\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_valid_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background selection",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"jonse1234\" and password \"123456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_invalid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid Message \"impartent\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_valid_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background selection",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"vikkiy1234\" and password \"123456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_invalid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid Message \"message\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.user_enter_valid_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});