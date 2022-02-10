// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient }= require('mongodb');
async function getCoursesFromDB(department){
  const url="mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  const client= new MongoClient(url);
  try {
      await client.connect(); 
      const courses=await client.db("CourseView").collection("departmentsCourses").find({name
        :"Art and Art History"});
      return courses.name;
  }
  catch(e) {
      console.log(e);
  }
  finally {
      await client.close();
  }
}
async function main(){
  console.log(await getCoursesFromDB("Cognitive Science"));
} 
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
