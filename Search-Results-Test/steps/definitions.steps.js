const { Given, When, Then } = require("@cucumber/cucumber");
const BasePage = require("../pages/base.page");
const GooglePage = require("../pages/google.page");
const SearchResultsPage = require("../pages/search.results.page");

let basePage, googleSearchPage, searchResultsPage;

Given("I visit Google", async function () {
  basePage = new BasePage(this.driver);
  await basePage.goToUrl("https://www.google.com");
  googleSearchPage = new GooglePage(this.driver);
});

When("I search {string}", async function (searchText) {
  await googleSearchPage.enterSearch(searchText);
  searchResultsPage = new SearchResultsPage(this.driver);
});

Then("I expect to see more than 0 results", async function () {
  await searchResultsPage.validateSearchResults();
});