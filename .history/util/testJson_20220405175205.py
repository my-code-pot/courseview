import json

data = open(
    "description.json",
)
with open("description.json", "r") as f:
    dept_array = json.load(f)
    for dept in dept_array:
        

# op = json.load(data)
# print(op[0])
# op.append({"title": "description"})

# with open("description_appended.json", "w") as f:
#     json.dump(op, f)
