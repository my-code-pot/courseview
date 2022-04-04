const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    const departments = driver.get(
      "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    );
    const a = await driver
      .findElement(
        By.xpath(
          `//*[@id='gateway-page']/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[1]/a`
        )
      )
      .click();
  } finally {
    console.log("done");
  }
})();
