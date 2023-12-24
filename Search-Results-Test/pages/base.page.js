const { By, until } = require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async goToUrl(url) {
    await this.driver.get(url);
  }

  async enterTextByCss(css, searchText) {
    await this.driver.findElement(By.css(css)).sendKeys(searchText);
  }

  async getElementById(id, timeout) {
    let element = await this.driver.findElement(By.id(id));
    await this.driver.wait(until.elementIsVisible(element), timeout);
    return element;
  }
}

module.exports = BasePage;