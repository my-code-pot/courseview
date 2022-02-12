import { MongoClient } from "mongodb";

const connectToMongo = async (callback) => {

    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = db.db("test");
    return 
};
