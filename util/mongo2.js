import { MongoClient } from "mongodb";

const connectToMongo = async () => {
  return await MongoClient.connect(process.env.MONGODB_URI);
};

export default connectToMongo;
