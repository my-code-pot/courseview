import json

data = open(
    "description.json",
)

op = json.load(data)
op.a
print(op[0])
