// api to get all the courses of specific department
import connectToMongo from "../../../util/mongo";
import bodyParser from "body-parser";
const handler = async (req, res) => {

  if (req.method === "GET") {
    const client = await connectToMongo();
    const db = client.db();
    const coursesData = db.collection("courses_and_reviews_test");
    const {course}=req.query;
    const courseData = await coursesData.findOne({title:course});
    if (courseData !==null) {
      res.status(200).json(courseData);
    } else {
      res.status(401).json({ message: "No departments found" });
    }
  }
  else if (req.method === "POST"){
    const client = await connectToMongo();
    const db = client.db();
    const coursesData = db.collection("courses_and_reviews_test");
    const {course}=req.query;
    const newReview= {
      name:req.body.name,
      likes:"0",
      dislikes:"0",
      semester:req.body.semester,
      professor:req.body.professor,
      text:req.body.review,
    }
    console.log(req.body);
    const fieldsToIncrease ={
      number_of_reviews: 1,
      sum_of_difficulty:req.body.difficulty,
      sum_of_organization:req.body.organization,
      sum_of_overall_quality:req.body.quality,
      sum_of_will_take_again:req.body.will_take_again,
    }
    console.log(fieldsToIncrease);
    coursesData.updateOne({title:course},{ $inc:  fieldsToIncrease  });
    coursesData.updateOne({title:course},{ $push: { reviews: newReview } });
    res.status(200).json("done");
    // client.close();
  }
};
export default handler;