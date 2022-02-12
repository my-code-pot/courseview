// api to get all the courses of specific department
import connectToMongo from "../../../util/mongo";


const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToMongo();
    const db = client.db();
    const dept = db.collection("departmentsCourses");
    const {department}=req.query;
    const departmentDocument = await dept.find({name:department}).toArray();
    client.close();

    if (departmentDocument.length > 0) {
      const departmentCourses=departmentDocument[0].courses;
      res.status(200).json(departmentCourses);
    } else {
      res.status(401).json({ message: "No departments found" });
    }
  }
};
export default handler;