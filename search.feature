Feature: Search functionality

  As a user I want to search on the website
  So that I can find the information I am looking for

  Scenario: To verify I should able search on the website
    Given I am on the home page of the website https://www.clearchannelinternational.com/
    When I click on the search icon in the header at the right side
    And I enters "test" in to the search box
    And I click on the search icon button at the right of the search field
    Then search result related to "test" should displayed
