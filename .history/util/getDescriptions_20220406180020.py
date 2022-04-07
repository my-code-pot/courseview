from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


driver = webdriver.Chrome()


def getData():
    catalog = {}
    with open("description.json", "r") as f:
    dept_array = json.load(f)
    for dept in dept_array:
        for dept_name, courses in dept.items():
            print(dept_name)
    #     {
    #     "dept": {"code": "name", "code": "name"},
    #     "dept2": {"code": "name", "code": "name"},
    # }



if __name__ == "__main__":
    getData()
    driver.close()
