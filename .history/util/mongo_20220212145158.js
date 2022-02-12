import { MongoClient } from "mongodb";

const connectToMongo = async (callback) => {

    const client = await MongoClient.connect(process.env.MONGODB_URL);
};
