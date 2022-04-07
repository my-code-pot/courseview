from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


driver = webdriver.Chrome()


def getData():
    catalog = {}
    # with open("crn.json", "r") as f:
    #     catalog = json.load(f)
    # print(catalog["Art and Art History"])
    #     {
    #     "dept": {"code": "name", "code": "name"},
    #     "dept2": {"code": "name", "code": "name"},
    # }
    links = ["google.com", "https://cnn.com"]
    for link in links:
        driver.get(link)
        print()


if __name__ == "__main__":
    getData()
    driver.close()
