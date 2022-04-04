import React from "react";
const { Builder, By, Key, until } = require("selenium-webdriver");

const seln = () => {
  (async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.navigate().to("http://localhost:3000/");
  })();
  return <div>seln</div>;
};

export default seln;
