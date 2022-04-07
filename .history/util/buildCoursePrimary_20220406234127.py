import pymongo
import json

client = pymongo.MongoClient(
    "mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/CourseView?retryWrites=true&w=majority"
)

db = client.get_database("CourseView")

def buildCoursePrimary():
    descriptions = db.scrappedData
    print(descriptions.count_documents({}))
    descriptions.delete_many({})  # removes all the existing documents
    with open("description.json", "r") as f:
        all_descriptions = json.load(f)
        for dept, courses in all_descriptions.items():
            course_array = []
            for crn, metadata in courses.items():
                course_metadata = {
                    "crn": crn,
                    "title": metadata["title"],
                    "name": metadata["name"],
                    "description": metadata["description"],
                }
                course_array.append(course_metadata)
            document = {"name": dept,  "courses":course_array}
            descriptions.insert_one(document)
    print(descriptions.count_documents({}))