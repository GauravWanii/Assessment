$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/RateAPI.feature");
formatter.feature({
  "name": "Foreign Exchange rates",
  "description": "  This feature is to validate scenarios related to Latest Foreign Exchange rates and for future date provided in Foreign Exchange rates API url.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.scenario({
  "name": "Check the success status of the response for Latest Foreign Exchange rates API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinations.i_have_Rates_API_for_Latest_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api url",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinations.i_hit_the_api_url()"
});
formatter.write("Hit the API url: https://api.ratesapi.io/api/latest");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the response for latest rates with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.api_returns_the_response_for_latest_rates_with_status_code_as(Integer)"
});
formatter.write("Status code appearing as: 200");
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.9005,\"HKD\":9.4939,\"IDR\":17293.8,\"ILS\":3.9785,\"DKK\":7.4398,\"INR\":90.116,\"CHF\":1.0821,\"MXN\":24.2407,\"CZK\":26.204,\"SGD\":1.6227,\"THB\":36.554,\"HRK\":7.5315,\"MYR\":4.9419,\"NOK\":10.5015,\"CNY\":8.0006,\"BGN\":1.9558,\"PHP\":58.799,\"SEK\":10.1335,\"PLN\":4.4423,\"ZAR\":17.982,\"CAD\":1.5546,\"ISK\":155.4,\"BRL\":6.2136,\"RON\":4.8695,\"NZD\":1.7093,\"TRY\":9.4828,\"JPY\":126.19,\"RUB\":89.3049,\"KRW\":1338.48,\"USD\":1.2246,\"HUF\":355.27,\"AUD\":1.6052},\"date\":\"2020-12-17\"}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check all Latest Foreign Exchange rates return in the response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinations.i_have_Rates_API_for_Latest_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api url",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinations.i_hit_the_api_url()"
});
formatter.write("Hit the API url: https://api.ratesapi.io/api/latest");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all Latest Foreign Exchange rates will be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.all_Latest_Foreign_Exchange_rates_will_be_returned()"
});
formatter.write("Latest foreign exchange rates returned");
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.9005,\"HKD\":9.4939,\"IDR\":17293.8,\"ILS\":3.9785,\"DKK\":7.4398,\"INR\":90.116,\"CHF\":1.0821,\"MXN\":24.2407,\"CZK\":26.204,\"SGD\":1.6227,\"THB\":36.554,\"HRK\":7.5315,\"MYR\":4.9419,\"NOK\":10.5015,\"CNY\":8.0006,\"BGN\":1.9558,\"PHP\":58.799,\"SEK\":10.1335,\"PLN\":4.4423,\"ZAR\":17.982,\"CAD\":1.5546,\"ISK\":155.4,\"BRL\":6.2136,\"RON\":4.8695,\"NZD\":1.7093,\"TRY\":9.4828,\"JPY\":126.19,\"RUB\":89.3049,\"KRW\":1338.48,\"USD\":1.2246,\"HUF\":355.27,\"AUD\":1.6052},\"date\":\"2020-12-17\"}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check correct response supplied by the call if incorrect or incomplete url is provided",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinations.i_have_Rates_API_for_Latest_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the incorrect api url",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinations.i_hit_the_incorrect_api_url()"
});
formatter.write("Hit the incomplete url: https://api.ratesapi.io/api/123");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the response for incomplete url with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.api_returns_the_response_for_incomplete_url_with_status_code_as(Integer)"
});
formatter.write("Status code appearing as: 400");
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"error\":\"time data \u0027123\u0027 does not match format \u0027%Y-%m-%d\u0027\"}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the success status of the response for specific date Foreign Exchange rates API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Rates API for specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinations.i_have_Rates_API_for_specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api url for specific date",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinations.i_hit_the_api_url_for_specific_date()"
});
formatter.write("Hit the specific date api url: https://api.ratesapi.io/api/2010-01-12");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the response for specific date with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.api_returns_the_response_for_specific_date_with_status_code_as(Integer)"
});
formatter.write("Status code appearing as: 200");
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.8972,\"HKD\":11.2301,\"IDR\":13281.14,\"PLN\":4.0838,\"DKK\":7.4405,\"LVL\":0.7093,\"INR\":66.21,\"CHF\":1.4743,\"MXN\":18.4995,\"CZK\":26.258,\"SGD\":2.0133,\"THB\":47.839,\"BGN\":1.9558,\"MYR\":4.8424,\"NOK\":8.1825,\"CNY\":9.8863,\"HRK\":7.2753,\"PHP\":66.106,\"SEK\":10.2215,\"LTL\":3.4528,\"ZAR\":10.8264,\"CAD\":1.4959,\"BRL\":2.5309,\"RON\":4.1405,\"EEK\":15.6466,\"NZD\":1.9573,\"TRY\":2.1084,\"JPY\":132.41,\"RUB\":42.6974,\"KRW\":1627.4,\"USD\":1.4481,\"HUF\":268.18,\"AUD\":1.5668},\"date\":\"2010-01-12\"}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check all Foreign Exchange rates return in the response for specific date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Rates API for specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinations.i_have_Rates_API_for_specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api url for specific date",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinations.i_hit_the_api_url_for_specific_date()"
});
formatter.write("Hit the specific date api url: https://api.ratesapi.io/api/2010-01-12");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all Latest Foreign Exchange rates will be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.all_Latest_Foreign_Exchange_rates_will_be_returned()"
});
formatter.write("Latest foreign exchange rates returned");
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.8972,\"HKD\":11.2301,\"IDR\":13281.14,\"PLN\":4.0838,\"DKK\":7.4405,\"LVL\":0.7093,\"INR\":66.21,\"CHF\":1.4743,\"MXN\":18.4995,\"CZK\":26.258,\"SGD\":2.0133,\"THB\":47.839,\"BGN\":1.9558,\"MYR\":4.8424,\"NOK\":8.1825,\"CNY\":9.8863,\"HRK\":7.2753,\"PHP\":66.106,\"SEK\":10.2215,\"LTL\":3.4528,\"ZAR\":10.8264,\"CAD\":1.4959,\"BRL\":2.5309,\"RON\":4.1405,\"EEK\":15.6466,\"NZD\":1.9573,\"TRY\":2.1084,\"JPY\":132.41,\"RUB\":42.6974,\"KRW\":1627.4,\"USD\":1.4481,\"HUF\":268.18,\"AUD\":1.5668},\"date\":\"2010-01-12\"}");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if future date is provied in url, the response matches for the current date.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Rates API for future date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinations.i_have_Rates_API_for_future_date_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api url providing future date the url",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinations.i_hit_the_api_url_providing_future_date_the_url()"
});
formatter.write("Hit the future date api url: https://api.ratesapi.io/api/2021-01-12");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns the response for future date provided with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.api_returns_the_response_for_future_date_provided_with_status_code_as(Integer)"
});
formatter.write("Status code appearing as: 200");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response matches for the current date",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinations.the_response_matches_for_the_current_date()"
});
formatter.write("Latest foreign exchange rates returned");
formatter.result({
  "status": "passed"
});
formatter.write("Response: {\"base\":\"EUR\",\"rates\":{\"GBP\":0.9005,\"HKD\":9.4939,\"IDR\":17293.8,\"ILS\":3.9785,\"DKK\":7.4398,\"INR\":90.116,\"CHF\":1.0821,\"MXN\":24.2407,\"CZK\":26.204,\"SGD\":1.6227,\"THB\":36.554,\"HRK\":7.5315,\"MYR\":4.9419,\"NOK\":10.5015,\"CNY\":8.0006,\"BGN\":1.9558,\"PHP\":58.799,\"SEK\":10.1335,\"PLN\":4.4423,\"ZAR\":17.982,\"CAD\":1.5546,\"ISK\":155.4,\"BRL\":6.2136,\"RON\":4.8695,\"NZD\":1.7093,\"TRY\":9.4828,\"JPY\":126.19,\"RUB\":89.3049,\"KRW\":1338.48,\"USD\":1.2246,\"HUF\":355.27,\"AUD\":1.6052},\"date\":\"2020-12-17\"}");
formatter.after({
  "status": "passed"
});
});