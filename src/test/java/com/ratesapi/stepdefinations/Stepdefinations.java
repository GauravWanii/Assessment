package com.ratesapi.stepdefinations;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static org.hamcrest.Matchers.*;

import java.util.logging.Logger;

import com.ratesapi.constants.ProjectConstants;
import com.ratesapi.workflows.Workflow;

import static io.restassured.RestAssured.*;

public class Stepdefinations {
	
	RequestSpecification _REQUEST_SPEC;
	private final static Logger logger = Logger.getLogger(Stepdefinations.class.getName());
	Response _RESP;
	Scenario scn;
	
	//Hooks	
		@Before
		public void beforeHook(Scenario s) {
			this.scn = s;
		}

		@After
		public void afterHook(Scenario s){
			this.scn = s;
			if (_RESP==null) {
		logger.info("Response: No response received.");
			}else {
				scn.write("Response: " + _RESP.asString());
				logger.info("Response: " + _RESP.asString());
			}
		}
		
		@Given("I have Rates API for Latest Foreign Exchange rates")
		public void i_have_Rates_API_for_Latest_Foreign_Exchange_rates() {
		    
			_REQUEST_SPEC = given().baseUri(ProjectConstants.URL);
			logger.info("Base URL: "+ProjectConstants.URL);
		}

		@When("I hit the api url")
		public void i_hit_the_api_url() {
			_RESP = _REQUEST_SPEC.when().get(ProjectConstants.LATESTDATE);
			scn.write("Hit the API url: "+ProjectConstants.URL+ProjectConstants.LATESTDATE);
			logger.info("Hit the API url "+ProjectConstants.LATESTDATE);
		}

		@Then("API returns the response for latest rates with status code as {int}")
		public void api_returns_the_response_for_latest_rates_with_status_code_as(Integer int1) {
			_RESP.then().assertThat().statusCode(int1);
			scn.write("Status code appearing as: " + int1);
			logger.info("Status code appearing as: " + int1);
		}

		@Then("all Latest Foreign Exchange rates will be returned")
		public void all_Latest_Foreign_Exchange_rates_will_be_returned() throws Exception {
			 Workflow.of()
	         .validateLatestRates();
			 scn.write("Latest foreign exchange rates returned");
			 logger.info("Latest foreign exchange rates returned");
		}

		@When("I hit the incorrect api url")
		public void i_hit_the_incorrect_api_url() {
			_RESP = _REQUEST_SPEC.when().get(ProjectConstants.INVALIDURL);
			scn.write("Hit the incomplete url: "+ProjectConstants.INVALIDURL);
			logger.info("Hit the incomplete url");
		}

		@Then("API returns the response for incomplete url with status code as {int}")
		public void api_returns_the_response_for_incomplete_url_with_status_code_as(Integer int1) {
			_RESP.then().assertThat().statusCode(int1);
			scn.write("Status code appearing as: " + int1);
			logger.info("Status code appearing as: " + int1);
		}

		@Given("I have Rates API for specific date Foreign Exchange rates")
		public void i_have_Rates_API_for_specific_date_Foreign_Exchange_rates() {
			_REQUEST_SPEC = given().baseUri(ProjectConstants.URL);
			_RESP = _REQUEST_SPEC.when().get(ProjectConstants.OTHERDATE);
			logger.info("Hit the api url for specific date- "+_RESP.asString());
		}
		
		@When("I hit the api url for specific date")
		public void i_hit_the_api_url_for_specific_date() {
			_RESP = _REQUEST_SPEC.when().get(ProjectConstants.OTHERDATE);
			scn.write("Hit the specific date api url: "+ProjectConstants.URL+ProjectConstants.OTHERDATE);
			logger.info("Hit the specific date api url- "+_RESP.asString());;
		}

		@Then("API returns the response for specific date with status code as {int}")
		public void api_returns_the_response_for_specific_date_with_status_code_as(Integer int1) {
			_RESP.then().assertThat().statusCode(int1);
			scn.write("Status code appearing as: " + int1);
			logger.info("Status code appearing as: " + int1);
		}

		@Given("I have Rates API for future date Foreign Exchange rates")
		public void i_have_Rates_API_for_future_date_Foreign_Exchange_rates() {
			_REQUEST_SPEC = given().baseUri(ProjectConstants.URL);
			logger.info("Given is I have Rates API for future date Foreign Exchange rates");
		    
		}

		@When("I hit the api url providing future date the url")
		public void i_hit_the_api_url_providing_future_date_the_url() {
			_RESP = _REQUEST_SPEC.when().get(ProjectConstants.FUTUREDATE);
			scn.write("Hit the future date api url: "+ProjectConstants.URL+ProjectConstants.FUTUREDATE);
			logger.info("Hit the future date api url- "+_RESP.asString());
		}

		@Then("API returns the response for future date provided with status code as {int}")
		public void api_returns_the_response_for_future_date_provided_with_status_code_as(Integer int1) {
			_RESP.then().assertThat().statusCode(int1);
			scn.write("Status code appearing as: " + int1);
			logger.info("Status code appearing as: " + int1);
		}

		@Then("the response matches for the current date")
		public void the_response_matches_for_the_current_date() throws Exception {
			 Workflow.of()
	         .validateLatestRates();
			 scn.write("Latest foreign exchange rates returned");
			 logger.info("Latest foreign exchange rates returned");
		}



}
