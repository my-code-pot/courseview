from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


driver = webdriver.Chrome()


def getData():
    departments_page = driver.get(
        "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    )

    each_dept_page = driver.find_element(
        By.XPATH,
        '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[9]/a',
    )
    dept_title = each_dept_page.text
    each_dept_page.click()
    courses = driver.find_elements(By.CLASS_NAME, "acalog-course")
    each_dept_descriptions = {}
    for i, course in enumerate(courses):
        title = course.text
        
        # course.click()
        WebDriverWait(driver, 50).until(
            EC.element_to_be_clickable(course)
        ).click()
        desc = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located(
                (
                    By.CSS_SELECTOR,
                    "body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > div.tooltip.for_tt6144 > table > tbody > tr > td > div:nth-child(2)",
                )
            )
        )
        WebDriverWait(driver, 50).until(
            EC.element_to_be_clickable(course)
        ).click()
        print(title)
        each_dept_descriptions[title] = desc.text
        print(i)

    # existing_depts_descriptions_file = open(
    #     "description.json",
    # )

    # existing_depts_descriptions = json.load(existing_depts_descriptions_file)
    # existing_depts_descriptions.append({dept_title: each_dept_descriptions})

    # with open("description.json", "w") as f:
    #     json.dump(existing_depts_descriptions, f)


if __name__ == "__main__":
    getData()
    driver.close()
