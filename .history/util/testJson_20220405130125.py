import json

data = open(
    "description.json",
)

op = json.load(data)
op.append({"title": ""})
print(op[0])
