const seleniumWebdriver = require("selenium-webdriver");

class CustomWorld {
  constructor() {
    this.driver = null;
  }

  async init() {
    this.driver = await new seleniumWebdriver.Builder().forBrowser('chrome').build();
  }
}

module.exports = CustomWorld;