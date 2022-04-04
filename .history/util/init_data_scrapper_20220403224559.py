from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver  = webdriver.Chrome()

def getData():
    try:
        departments_page = driver.get(
      "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    )

    each_dept_page = driver.find_element_by_xpath("//*[@id='gateway-page']/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[1]/a").click()

    for i in range(10):
      crc_page = driver.find_element_by_xpath(
            "//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[${
              i + 1
            }]/span/a`
          )
        )
        .click();

      const description = await driver.wait(
        until.elementLocated(
          By.xpath(
            `//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[1]/span/table/tbody/tr/td/div[2]`
            //*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[14]/ul/li[${i+1}]/span/table/tbody/tr/td/div[2]
          )
        )
      );
      const description_text = await description.getText();
      console.log(description_text);
      console.log(i + 1);
    }
  } finally {
    driver.quit();
  }