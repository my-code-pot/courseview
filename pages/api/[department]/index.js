// api to get all the courses of specific department
import connectToMongo from "../../../util/mongo";


const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToMongo();
    const db = client.db();
    const dept = db.collection("scrappedData");
    const {department}=req.query;
    const departmentDocument = await dept.findOne({name:department});
    client.close();

    if (departmentDocument!=null) {
      const coursesList=departmentDocument.courses;
      const departmentCourses=coursesList.map((course)=>(course.title));
      res.status(200).json(departmentCourses);
    } else {
      res.status(401).json({ message: "No departments found" });
    }
  }
};
export default handler;