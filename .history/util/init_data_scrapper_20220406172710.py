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
    
    dept_xpath = '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[9]/a'
    course_dscp_selector = "body > table > tbody > tr:nth-child(3) > td.block_n2_and_content > table > tbody > tr:nth-child(2) > td.block_content_outer > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > div:nth-child(10) > div:nth-child(1) > ul > li.acalog-course.acalog-course-open > span > table > tbody > tr > td > div:nth-child(2)"
    each_dept_page = driver.find_element(By.XPATH, dept_xpath)
    dept_title = each_dept_page.text
    each_dept_page.click()
    courses = driver.find_elements(By.CLASS_NAME, "acalog-course")
    each_dept_descriptions = {}
    for i, course in enumerate(courses[:2]):
        title = course.text
        # course.click()
        WebDriverWait(driver, 40).until(
            EC.element_to_be_clickable(course)
        ).click()
        tag = WebDriverWait(course, 40).until(
            EC.visibility_of_element_located((By.TAG_NAME, "a"))
        )
        print(tag.text)
        print(tag.get_attribute("onclick"))
        # WebDriverWait(driver, 50).until(
        #     EC.element_to_be_clickable(course)
        # ).click()
        # print(title)
        # print(desc.text)
        # each_dept_descriptions[title] = desc.text
        # print(i)

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
