import json

data = open(
    "description.json",
)

op = json.load(data)
op.append({"": "test"})
print(op[0])
