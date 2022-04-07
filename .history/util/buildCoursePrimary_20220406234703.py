import pymongo
import json

client = pymongo.MongoClient(
    "mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/CourseView?retryWrites=true&w=majority"
)

db = client.get_database("CourseView")
courses_and_reviews = db.courses_and_reviews


def buildCoursePrimary(initial_data):
    print(courses_and_reviews.count_documents({}))
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
                    "number_of_reviews": initial_data["number_of_reviews"],
                    "sum_of_difficulty": initial_data["sum_of_difficulty"],
                    "sum_of_overall_quality": 0,
                    "sum_of_will_take_again": 0,
                }
                courses_and_reviews.insert_one(course_and_review)
    print(courses_and_reviews.count_documents({}))


if __name__ == "__main__":
    buildCoursePrimary()
