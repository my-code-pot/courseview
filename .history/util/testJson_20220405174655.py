import json

data = open(
    "description.json",
)
with open("description.json", "w") as f:
    json.dump(data, f)

op = json.load(data)
op.append({"title": "description"})

# with open("description_appended.json", "w") as f:
#     json.dump(op, f)
