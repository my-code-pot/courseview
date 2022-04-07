import json

data = open(
    "description.json",
)
with open

op = json.load(data)
op.append({"title": "description"})

# with open("description_appended.json", "w") as f:
#     json.dump(op, f)
