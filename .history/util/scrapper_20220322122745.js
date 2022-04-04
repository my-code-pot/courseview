const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  descriptions = [];
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
    driver.quit();
  }
}

async function exampleAll() {
  descriptions = [];
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
    const dept_nums = await driver.findElements(By.className("acalog-course"));
    // const one = await dept_nums[0].getChildElement(By.className("acalog-course"));
    const a = await dept_nums[0].getAttribute("class");
    console.log(a);
    // for (let i = 0; i < dept_nums.length; i++) {
    //   const crc_page = await driver
    //     .findElement(
    //       By.xpath(
    //         `
    //         //*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[${
    //           i + 1
    //         }]/span/a`
    //       )
    //     )
    //     .click();

    //   const description = await driver.wait(
    //     until.elementLocated(
    //       By.xpath(
    //         `//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[1]/span/table/tbody/tr/td/div[2]`
    //         //*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[14]/ul/li[${i+1}]/span/table/tbody/tr/td/div[2]
    //       )
    //     )
    //   );
    //   const description_text = await description.getText();
    //   console.log(description_text);
    //   console.log(i + 1);
    // }
  } finally {
    driver.quit();
  }
}

exampleAll();
