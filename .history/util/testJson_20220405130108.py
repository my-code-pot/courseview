import json

data = open(
    "description.json",
)

op = json.load(data)
op.append({"name": "test"})
print(op[0])
