package com.cts.runner;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="NewToursAppFeatures", 
		glue= {"com.cts.steps"},
		plugin= {"html:mywebreport","json:JSONReport","junit:target/myreprt.xml"}
		
		)
@SuiteClasses({})
public class TestRunner {

}
