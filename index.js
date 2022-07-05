const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("disable-infobars"); //// This is not working

async function sessionThree() {
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  await driver.get("https://www.facebook.com/");

  userName = driver.findElement(By.name("email"));
  userName.click();
  userName.sendKeys("shankonduru@gmail.com");
  driver.sleep(1000);

  password = driver.findElement(By.name("pass"));
  password.click();
  password.sendKeys("shankonduru@");
  driver.sleep(1000);

  loginButton = driver.findElement(By.name("login"));
  loginButton.click();
}

sessionThree();
