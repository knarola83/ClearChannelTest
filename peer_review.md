Feature: Ssearching
I want to be able to search the website
So that I can find the information I am looking for

Scenario Outline: Search 
Given https://www.clearchannelinternational.com/
When I go the the header
And I click on the icon on the right which will let me search
And I enter test
And I click the search button on the right of the search field
And the search executes

1) List each issue you see with the scenario and state how you would improve it
2) Implement the changes you have suggested

List of issue:
1) Feature: spelling and grammar mistakes are in "Feature" key word.
2) It is not Scenario Outline(Scenario Outline contains more data combination) it is only one Scenario so title suppose to be Scenario instead of Scenario Outline.
3) In Given explain properly where is user.
4) In When write exact which action user is taking and at the end result write with Then key word.

New Scenario:

Feature: Search functionality

  As a user I want to search on the website
  So that I can find the information I am looking for

  Scenario: To verify I should able search on the website
    Given I am on the home page of the website https://www.clearchannelinternational.com/
    When I click on the search icon in the header at the right side
    And I enters "test" in to the search box
    And I click on the search icon button at the right of the search field
    Then search result related to "test" should displayed
