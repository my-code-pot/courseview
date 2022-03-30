const {MongoClient} = require("mongodb");

const connectToMongo = async () => {
  const client =  await MongoClient.connect(process.env.MONGODB_URI);
  console.log(client)
  return client
};

export default connectToMongo;
