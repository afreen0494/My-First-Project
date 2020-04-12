#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template



#This is a feature file
#A feature means a functionality
Feature: Login functionality
@Login1
Scenario Outline: Sucessful Login with valid credentials
Given User on login page
When User enters valid  "<username>" and "<password>"
And User clicks on login button
Then User lands on Weclome page
Examples:
| username    |  password |
|  test       |    test   |
|  test1      |   test1   |
|  test2      |   test2   |
