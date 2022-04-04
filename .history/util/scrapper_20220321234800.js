const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    const departments_page = driver.get(
      "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    );
    const each_dept_page = await driver
      .findElement(
        By.xpath(
          `//*[@id='gateway-page']/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[1]/a`
        )
      )
      .click();
    const crc_page = await driver
      .findElement(
        By.xpath(
          `//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[1]/span/a`
        )
      )
      .click();

    const query = await driver.wait(
      until.elementLocated(
        By.xpath(
          `//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[1]/span/table/tbody/tr/td/div[2]`
        )
      )
    );
    const query_text = await query.getText();
    console.log(query_text);
  } finally {
    console.log("done");
  }
}
