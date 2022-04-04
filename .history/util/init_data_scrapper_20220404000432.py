from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome()


def getData():
    try:
        departments_page = driver.get(
            "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
        )

        each_dept_page = driver.find_element(
            By.XPATH,
            '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[1]/a',
        )
        each_dept_page.click()
        courses = driver.find_elements(By.CLASS_NAME, "acalog-course")
        print(courses[1].text)
        courses[1].click()
        # desc = WebDriverWait(courses[2], 50).until(
        #     EC.visibility_of_element_located(
        #         (
        #             By.CSS_SELECTOR,
        #             "body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)",
        #         )
        #     )
        # )
        # descp_div = (
        #     courses[0]
        #     .find_element(
        #         By.XPATH,
        #         '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[1]/span/table/tbody/tr/td/div[2]'
        #     )
        # )
        # print(desc.text)

        # for i in range(10):
        #     crc_page = driver.find_element_by_xpath(
        #         """//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/table/tbody/tr[2]/td/div/div[12]/ul/li[${
        #             i + 1
        #             }]/span/a"""
        #     ).click()
    finally:
        print("Reached final")
        # driver.quit()


if __name__ == "__main__":
    getData()

"""
body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)
body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)
body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(12) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)
"""
