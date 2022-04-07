import json

data = open(
    "description.json",
)

op = json.load(data)

print(op["details"]["name"])