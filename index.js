const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { By, Key } = require("selenium-webdriver");

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");

async function sessionThree() {
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  driver.get("https://www.google.com/");

  textbox = await driver.findElement(By.name("q"));
  textbox.sendKeys("shan konduru", Key.RETURN);
  driver.sleep(1000);

  /*
  driver.get("https://www.facebook.com/");

  userName = await driver.findElement(By.name("email"));
  userName.click();
  userName.sendKeys("shankonduru@gmail.com");
  driver.sleep(1000);

  password = driver.findElement(By.name("pass"));
  password.click();
  password.sendKeys("shankonduru@");
  driver.sleep(1000);

  loginButton = driver.findElement(By.name("login"));
  loginButton.click();
  */
}

sessionThree();
