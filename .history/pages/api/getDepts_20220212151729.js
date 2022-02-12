// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose =require('mongoose');

const url="mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/CourseView?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser:true})
.then(
  console.log("hello")
).catch(
  (err)=> console.log(err)
);
 

