$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:NewToursAppFeatures/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Sucessful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "User on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on Weclome page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test",
        "test"
      ]
    },
    {
      "cells": [
        "test1",
        "test1"
      ]
    },
    {
      "cells": [
        "test2",
        "test2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sucessful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "User on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid  \"test\" and \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on Weclome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_lands_on_Weclome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sucessful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "User on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid  \"test1\" and \"test1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on Weclome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_lands_on_Weclome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sucessful Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "name": "User on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_on_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ARIF-HP\u0027, ip: \u0027192.168.43.155\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\afreen\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50433}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 42df6c12e751be05d251d4e2abdbc1fc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.cts.steps.StepsToExecute.user_on_login_page(StepsToExecute.java:20)\r\n\tat ✽.User on login page(file:///C:/afreen/github_projects/My-First-Project/pom/Cucumber-Test/NewToursAppFeatures/Login.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters valid  \"test2\" and \"test2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_enters_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User lands on Weclome page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.steps.StepsToExecute.user_lands_on_Weclome_page()"
});
formatter.result({
  "status": "skipped"
});
});