@RegressionTest
Feature: Foreign Exchange rates
  This feature is to validate scenarios related to Latest Foreign Exchange rates and for future date provided in Foreign Exchange rates API url.

  @Test
  Scenario: Check the success status of the response for Latest Foreign Exchange rates API
    Given I have Rates API for Latest Foreign Exchange rates
    When I hit the api url
    Then API returns the response for latest rates with status code as 200

  @Test
  Scenario: Check all Latest Foreign Exchange rates return in the response
    Given I have Rates API for Latest Foreign Exchange rates
    When I hit the api url
    Then all Latest Foreign Exchange rates will be returned

  @Test
  Scenario: Check correct response supplied by the call if incorrect or incomplete url is provided
    Given I have Rates API for Latest Foreign Exchange rates
    When I hit the incorrect api url
    Then API returns the response for incomplete url with status code as 400

  @Test
  Scenario: Check the success status of the response for specific date Foreign Exchange rates API
    Given I have Rates API for specific date Foreign Exchange rates
    When I hit the api url for specific date
    Then API returns the response for specific date with status code as 200

  @Test
  Scenario: Check all Foreign Exchange rates return in the response for specific date
    Given I have Rates API for specific date Foreign Exchange rates
    When I hit the api url for specific date
    Then all Latest Foreign Exchange rates will be returned

  @Test
  Scenario: Check if future date is provied in url, the response matches for the current date.
    Given I have Rates API for future date Foreign Exchange rates
    When I hit the api url providing future date the url
    Then API returns the response for future date provided with status code as 200
    Then the response matches for the current date
