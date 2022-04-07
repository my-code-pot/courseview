import json

data = open(
    "description.json",
)

op = json.load(data)
for key, val in op[0]
