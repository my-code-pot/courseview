// api to get all the departments
import connectToMongo from "../../util/mongo";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await connectToMongo();
    const db = client.db();
    const dept = db.collection("scrappedData");
    const departments = await dept.find({}).toArray();
    const departmentsNames=departments.map((department)=>(department.name))
    client.close();

    if (departments.length > 0) {
      res.status(200).json(departmentsNames);
    } else {
      res.status(401).json({ message: "No departments found" });
    }
  }
};
export default handler;
