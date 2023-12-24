const { Key } = require("selenium-webdriver");
const BasePage = require("../pages/base.page");

class GooglePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async enterSearch(searchText) {
    let searchField = "textarea[type='search']";
    await this.enterTextByCss(searchField, searchText);
    await this.enterTextByCss(searchField, Key.RETURN);
  }
}

module.exports = GooglePage;