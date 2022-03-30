// api to get all the courses of specific department
import connectToMongo from "../../../util/mongo";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToMongo();
    const db = client.db();
    const coursesData = db.collection("course_data");
    const {course}=req.query;
    const courseData = await coursesData.findOne({name:course+" "});
    client.close();
    if (courseData !==null) {
      res.status(200).json(courseData);
    } else {
      res.status(401).json({ message: "No departments found" });
    }
  }
};
export default handler;