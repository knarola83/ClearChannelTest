package com.clearchannelinternational;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".", tags = "@inValidLogin", format ={"pretty","html:target/cucumber-reports"})

public class RunTest {
}
