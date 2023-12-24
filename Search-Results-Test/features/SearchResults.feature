@Regression
Feature: Google Search

  Scenario: As a user, I should see more than zero results
    Given I visit Google
    When I search "Simetrik"
    Then I expect to see more than 0 results