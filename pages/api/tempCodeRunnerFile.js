const url="mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client= new MongoClient(url);
try {
    await client.connect(); 
    const courses=await client.db("CourseView").listCollections();
    console.log(courses);
}
catch(e) {
    console.log(e);
}
finally {
    await client.close();
}