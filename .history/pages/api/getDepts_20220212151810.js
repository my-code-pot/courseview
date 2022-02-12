// api to get all the departments
import 

const handler = async (req, res) => {
  const client = await connectToMongo();
  const db = client.db();
  const dept = db.collection("departmentsCourses");
  const departments = await dept.find({}).toArray();
  client.close();
  res.status(200).json(departments);
}

