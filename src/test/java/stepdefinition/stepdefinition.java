package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition {
WebDriver driver;
	
	@Given("User is on homepage")
	public void user_is_on_homepage() {
		
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/");
	}

	
	
	@When("user enter invalid Username {string} and password {string}")
	public void user_enter_invalid_Username_and_password(String username, String password) {
		driver.findElement(By.id("login")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);	   
	}


	@When("user click on Submit button")
	public void user_click_on_Submit_button() throws InterruptedException {
		driver.findElement(By.name("submitAuth")).click();
		driver.findElement(By.xpath("//a[@class='dropdown-toggle']")).click();
		Thread.sleep(2000);
	      driver.findElement(By.linkText("Inbox")).click();
	      driver.findElement(By.xpath("//a/img[@title='Compose message']")).click();     
	}


	@When("user enter valid credentials")
	public void user_enter_valid_credentials() throws InterruptedException {
		
		 driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys("amit");
	      Thread.sleep(2000);
	}
	@When("user click on submit button")
	public void user_click_on_submit_button() throws InterruptedException {
	driver.findElement(By.xpath("//li[text()='amit test']")).click();
	Thread.sleep(2000);
	}
	@When("User enter valid Message {string}")
	public void user_enter_valid_Message(String message) {
	      driver.findElement(By.xpath("//input[@class='form-control']")).sendKeys(message);   
	      driver.findElement(By.name("compose")).click();
	}


}
