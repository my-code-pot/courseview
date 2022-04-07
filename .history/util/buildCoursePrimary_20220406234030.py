import pymongo
import json

client = pymongo.MongoClient(
    "mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/CourseView?retryWrites=true&w=majority"
)

db = client.get_database("CourseView")

 = db.courses_and_reviews
print(descriptions.count_documents({}))
# descriptions.delete_many({})  # removes all the existing documents
with open("description.json", "r") as f:
    all_descriptions = json.load(f)
    for dept, courses in all_descriptions.items():
        for crn, metadata in courses.items():
            course_and_review = {
                "crn": crn,
                "title": metadata["title"],
                "name": metadata["name"],
                "description": metadata["description"],
                "department": dept,
                "reviews": [],
                "number_of_reviews": 0,
                "sum_of_difficulty": 0,
                "sum_of_overall_quality": 0,
                "sum_of_will_take_again": 0,
            }
            descriptions.insert_one(document)
print(descriptions.count_documents({}))
# print(accounts.count_documents({}))

# accounts.delete_many({ }) # removes all the existing documents

# months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

# # insert 1000 records to the collection
# leading_zero_indexer = 3
# new_digit_updater = 10
# gender = ['male', 'female']

# for i in range(1, 20):
#     first_name = names.get_first_name(gender=random.choice(gender))
#     last_name = names.get_last_name()
#     full_name = first_name + ' ' + last_name
#     if i/new_digit_updater == 1:
#         new_digit_updater *=10
#         leading_zero_indexer -=1
#     account = {
#         'account_num': leading_zero_indexer*'0' + str(i),
#         'first_name': first_name,
#         'last_name': last_name,
#         'full_name': full_name,
#         'DOB': random.choice(months) +'-' + str(random.randint(1, 30)) + '-' + str(random.randint(1940, 2031)),
#         'balance' :  round(10000*random.random() +1, 2)
#     }
#     accounts.insert_one(account)

# print(accounts.count_documents({}))
# item = accounts.find_one()
# print(item["first_name"])


# Add multiple objects to the JSON
# with open(my_path , 'r') as file:
#         previous_json = json.load(file)
#         users = previous_json + users

# with open(my_path , 'w') as file:
#     json.dump(users, file, indent=4)


# response = requests.get("https://goquotes-api.herokuapp.com/api/v1/all/quotes")

# quote_list = response.json()["quotes"]

# print(len(quote_list))

# setThree = {
#     "name": "Two",
#     "quotes": quote_list,
#     "description": "Inspirational, motivational quotes",
# }

# quotes.insert_one(setThree)

# with open('quotes.json', 'r') as f:
#     quotes_list = json.load(f)
#     setTwo = {
#         'name': 'Two',
#         'quotes': quotes_list,
#         'description': 'Inspirational, motivational, and Zen quotes'
#     }
#     quotes.insert_one(setTwo)
#     f.close()
