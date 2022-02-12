import {MongoClient} from 'mongodb';

consr mongodb = {
    Mon
}

const connectToMongo = async (callback) => {
    const {db} = await MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true});
}