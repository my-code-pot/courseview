

data = open(
    "info.json",
)

op = json.load(data)

print(op["details"]["name"])