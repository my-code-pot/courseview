from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


driver = webdriver.Chrome()


def getData():
    catalog = {}
    #     {
    #     "dept": {"code": "name", "code": "name"},
    #     "dept2": {"code": "name", "code": "name"},
    # }
    departments_page = driver.get(
        "https://catalog.swarthmore.edu/content.php?catoid=7&navoid=194"
    )
    for i in range(44):
        dept_xpath = f'//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td/ul/li[{i+1}]/a'
        each_dept_page = driver.find_element(By.XPATH, dept_xpath)
        dept_title = each_dept_page.text
        print(dept_title)
        each_dept_page.click()
        courses = driver.find_elements(By.CLASS_NAME, "acalog-course")
        crn_dict = {}
        for course in courses:
            # # course.click()
            # WebDriverWait(driver, 40).until(
            #     EC.element_to_be_clickable(course)
            # ).click()
            tag = WebDriverWait(course, 40).until(
                EC.visibility_of_element_located((By.TAG_NAME, "a"))
            )
            title = tag.text
            crn = tag.get_attribute("onclick").split("'")[3]
            print(f"{title} {crn}")
            crn_dict[crn] = title
        catalog[dept_title] = crn_dict
        driver.execute_script("window.history.go(-1)")
    # with open("description_appended.json", "w") as f:
#     json.dump(op, f)
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
