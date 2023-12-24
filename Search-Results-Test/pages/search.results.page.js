const { expect } = require("chai");
const BasePage = require("../pages/base.page");

class SearchResultsPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async validateSearchResults() {
    let searchResultsText = await (await this.getElementById("result-stats", 5000)).getText();
    let parsedResults = parseInt(searchResultsText.replace("Cerca de ", "").split(" ")[0].replaceAll(".", ""));
    expect(parsedResults).to.be.greaterThan(0);
  }
}

module.exports = SearchResultsPage;