import json

data = open(
    "description.json",
)

op = json.load(data)
op[0]
