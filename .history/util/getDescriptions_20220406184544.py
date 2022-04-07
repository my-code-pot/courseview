from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


driver = webdriver.Chrome()


def getData():
    catalog = {}
    with open("crn.json", "r") as f:
        catalog = json.load(f)
    print(catalog["Art and Art History"])
    #     {
    #     "dept": {"code": "name", "code": "name"},
    #     "dept2": {"code": "name", "code": "name"},
    # }

    #     {
    #   "dept": {
    #     "crn": {
    #       "title": "full_name",
    #       "name": "name",
    #       "description": "description"
    #     },
    #     "crn2": {
    #       "title": "full_name",
    #       "name": "name",
    #       "description": "description"
    #     }
    #   }
    # }
    links = ["https://google.com", "https://cnn.com"]
    description_endpoint = (
        "https://catalog.swarthmore.edu/preview_course_nopop.php?catoid=7&coid="
    )
    for dept, courses in catalog:
        driver.get(f"{description_endpoint}{71937}")
        text = driver.find_element(
            By.XPATH,
            '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td',
        ).text
        lines = text.split("\n")
        # The first line is the full_name, meaning it has the prefix of department and course number
        full_name = lines[0]
        # excluding the links that says to check out the schedules
        descriptions = "\n".join(lines[1 : len(lines) - 3])
        print(full_name)
        print(descriptions)


if __name__ == "__main__":
    getData()
    # driver.close()
