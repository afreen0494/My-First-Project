package com.cts.Execute;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepsToExecute {

	WebDriver driver;

@Given("User on login page")
public void user_on_login_page() {
   System.setProperty("webdriver.chrome.driver","C:/Users/afreen/eclipse-workspace/chrome_driver/chromedriver.exe" );
   driver=new ChromeDriver();
   driver.get("http://newtours.demoaut.com");
   System.out.println("user is on login page");
}
@When("User enters valid  {string} and {string}")
public void user_enters_valid_and(String username, String password) {
	driver.findElement(By.name("userName")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
	

}

@When("User clicks on login button")
public void user_clicks_on_login_button() {
	driver.findElement(By.xpath("//input[@name='login']")).click();
   System.out.println("user click on login button");
}

@Then("User lands on Weclome page")
public void user_lands_on_Weclome_page() {
	System.out.println("user lands on welcome page");
	driver.quit();
   
}


}
