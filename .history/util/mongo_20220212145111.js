import {MongoClient} from 'mongodb';

consr mongodb = {
    MongoClient:
    ...
}

const connectToMongo = async (callback) => {
    const {db} = await MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true});
}