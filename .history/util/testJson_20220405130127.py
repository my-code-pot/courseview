import json

data = open(
    "description.json",
)

op = json.load(data)
op.append({"title": "desc"})
print(op[0])
