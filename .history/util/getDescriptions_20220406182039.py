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
    links = ["https://google.com", "https://cnn.com"]
    description_endpoint = (
        "https://catalog.swarthmore.edu/preview_course_nopop.php?catoid=7&coid="
    )
    for i in range(1):
        driver.get(
            f"https://catalog.swarthmore.edu/preview_course_nopop.php?catoid=7&coid=7694"
        )


if __name__ == "__main__":
    getData()
    driver.close()
