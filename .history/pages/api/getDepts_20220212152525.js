// api to get all the departments
import connectToMongo from "../../util/mongo";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToMongo();
    const db = client.db();
    const dept = db.collection("departmentsCourses");
    const departments = await dept.find({}).toArray();
    client.close();

    if (departments.length > 0) {
      res.status(200).json(departments);
    }
    else{
      res.status(500)
    }
  }
};
export default handler;
