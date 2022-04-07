import json

data = open(
    "description.json",
)

op = json.load(data)
op.append({"title": "description"})
print(op[0])
