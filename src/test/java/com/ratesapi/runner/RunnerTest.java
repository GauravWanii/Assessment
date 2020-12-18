package com.ratesapi.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="classpath:features", //{"classpath:features/file1", "classpath:features/file2"}
		glue="com.ratesapi.stepdefinations",
		plugin= {
				"pretty",
				"html:test-output/CucumberReport"
		},
		monochrome = true
	)
public class RunnerTest {

}
