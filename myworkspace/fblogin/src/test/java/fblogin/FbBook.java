package fblogin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FbBook {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		WebDriver driver;
		System.setProperty("webdriver.chrome.driver", "C:/Users/afreen/eclipse-workspace/chrome_driver/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://facebook.com");
	}

}
