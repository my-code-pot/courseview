import React from "react";
const { Builder, By, Key, until } = require("selenium-webdriver");

const seln = () => {

  (async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    const page = driver.get(
      "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    );
    for (let i = 0; i < 10; i++) {
        driver.find_element(By.xpath)
    }
  })();
  return <div>seln</div>;
};

export default seln;
