const { Before, setWorldConstructor, After } = require("@cucumber/cucumber");
const CustomWorld = require("./customworld.js");

setWorldConstructor(CustomWorld);

Before(async function (scenario) {
  if (!this.driver) {
    await this.init(scenario);
  }
});

After(async function () {
  await this.driver.quit();
});