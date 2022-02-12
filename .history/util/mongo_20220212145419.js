import { MongoClient } from "mongodb";

const connectToMongo = async (callback) => {

    return await MongoClient.connect(process.env.MONGODB_URL);

};
