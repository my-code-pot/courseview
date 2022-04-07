from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json

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
    print(catalog["Art and Art History"])

    description_endpoint = (
        "https://catalog.swarthmore.edu/preview_course_nopop.php?catoid=7&coid="
    )
    all
    for dept, courses in catalog.items():
        each_depth_course_descriptions = {}
        for code, full_name in courses.items():
            driver.get(f"{description_endpoint}{code}")
            text = driver.find_element(
                By.XPATH,
                '//*[@id="gateway-page"]/body/table/tbody/tr[3]/td[1]/table/tbody/tr[2]/td[1]/table/tbody/tr/td',
            ).text
            lines = text.split("\n")
            # excluding the first line anf the last two lines, which have the links that says to check out the schedules
            description = "\n".join(lines[1 : len(lines) - 3])
            name = full_name.split(". ")[1]
            each_depth_course_descriptions[code] = {
                "title": full_name,
                "name": name,
                "description": description,
            }
        catalog[dept] = each_depth_course_descriptions

    with open("description.json", "w") as f:
        json.dump(catalog, f)


if __name__ == "__main__":
    getData()
    # driver.close()
