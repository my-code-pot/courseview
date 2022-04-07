from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
from alive_progress import alive_bar

"""Data structure:
In crn.json:
{
    "dept": {"code": "name", "code": "name"},
    "dept2": {"code": "name", "code": "name"},
}

In description.json:
    {
  "dept": {
    "crn": {
      "title": "full_name",
      "name": "name",
      "description": "description"
    },
    "crn2": {
      "title": "full_name",
      "name": "name",
      "description": "description"
    }
  }
}
"""

driver = webdriver.Chrome()


def getData():
    catalog = {}
    with open("crn.json", "r") as f:
        catalog = json.load(f)
    description_endpoint = (
        "https://catalog.swarthmore.edu/preview_course_nopop.php?catoid=7&coid="
    )
    all_descriptions = {}
   
    with open("description.json", "w") as f:
        json.dump(all_descriptions, f)


if __name__ == "__main__":
    getData()
    # driver.close()
