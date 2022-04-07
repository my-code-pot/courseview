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

    test_review = {
        "text": initial_data["text"] or "",
        "likes": initial_data["likes"] or 0,
        "dislikes": initial_data["dislikes"] or 0,
        "will_take_again": initial_data["will_take_again"] or "",
        "professor": initial_data["professor"] or "",
        "semester": initial_data["semester"] or "",
        "name": initial_data["name"] or "",
    }

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
                    "reviews": [test_review] if initial_data["text"] else [],
                    "number_of_reviews": initial_data["number_of_reviews"] or 0,
                    "sum_of_difficulty": initial_data["sum_of_difficulty"] or 0,
                    "sum_of_organization": initial_data["sum_of_organization"] or 0,
                    "sum_of_overall_quality": initial_data[
                        "sum_of_overall_quality"
                    ]
                    or 0,
                    "sum_of_will_take_again": initial_data[
                        "sum_of_will_take_again"
                    ]
                    or 0,
                }

                courses_and_reviews.insert_one(course_and_review)
    print(courses_and_reviews.count_documents({}))


if __name__ == "__main__":
    initial_data = {}
    buildCoursePrimary(initial_data)
    initial_data = {
        "text": """
        This course is a great way to get started in the field of computer science.
        It is well-organized and has a lot of material to help you learn.
        It was flexible enough to fit in with my schedule, and I found it to be a great fit for me.
        I would definitely recommend this course to anyone who is interested in learning computer science.
        I know way more about CS now than before.
        """,
        "likes": 5,
        "dislikes": 3,
        "will_take_again": "Green",
        "professor": "Lisa Meeden",
        "semester": "Fall 2021",
        "name": "Jamail Khan",
        "number_of_reviews": 1,
        "sum_of_difficulty": 3,
        "sum_of_overall_quality": 4,
        "sum_of_organization": 5,
        "sum_of_will_take_again": "Green",
    }
    buildCoursePrimary(initial_data)
