import json

data = open(
    "description.json",
)

op = json.load(data)
op.append({"title": "test"})
print(op[0])
