const {MongoClient} = require("mongodb");

const connectToMongo = async () => {
  const client =  await MongoClient.connect(process.env.MONGODB_URI);
  return client
};

export default connectToMongo;
