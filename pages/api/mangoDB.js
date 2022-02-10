const { MongoClient }= require('mongodb');
async function main(){
    const url="mongodb+srv://ihassou1:Swarth_12345@cluster0.jmjdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client= new MongoClient(url);
    try {
        await client.connect(); 
        await client.db("CourseView").collection("departmentsCourses").insertOne({
            "name":"physics"
        })
    }
    catch(e) {
        console.log(e);
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);
