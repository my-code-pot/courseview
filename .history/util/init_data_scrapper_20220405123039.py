from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome()


def getData():
    departments_page = driver.get(
        "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    )

    each_dept_page = driver.find_element(
        By.XPATH,
        '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[1]/a',
    )
    each_dept_page.click()
    courses = driver.find_elements(By.CLASS_NAME, "acalog-course")
    for i, course in enumerate(courses):
        # course.click()
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable(course).click()
        print(course.text)
        desc = WebDriverWait(driver, 30).until(
            EC.visibility_of_element_located(
                (
                    By.CSS_SELECTOR,
                    "body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)",
                )
            )
        )
        course.click()
        print(desc.text)
        print(i)

    # for i in range(10):
    #     crc_page = driver.find_element_by_xpath(
    #         """//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[${
    #             i + 1
    #             }]/span/a"""
    #     ).click()


if __name__ == "__main__":
    getData()
    driver.close()

"""
body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)
body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)
body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)
"""
