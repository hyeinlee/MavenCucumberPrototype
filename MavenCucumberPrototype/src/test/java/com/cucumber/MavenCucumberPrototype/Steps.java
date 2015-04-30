package com.cucumber.MavenCucumberPrototype;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class Steps {
	@Given("^This is my first dummy given step$")
	public void this_is_my_first_dummy_given_step() throws Throwable {
	    System.out.println("excuted the first given step.");
	}

	@When("^This is my second dummy given step$")
	public void this_is_my_second_dummy_given_step() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("excuted the second when step.");
	}

	@Then("^This is my third dummy given step$")
	public void this_is_my_third_dummy_given_step() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("excuted the third then step.");
	}

}
