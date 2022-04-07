import json

data = open(
    "description.json",
)

op = json.load(data)
print(op[0]["ARTH 001C. First-Year Seminar"])
