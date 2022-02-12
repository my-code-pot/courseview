import {MongoClient} from 'mongodb';

const connectToMongo = (callback) => {
    MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
        if (err) {
            return callback(err);
        }
        callback(null, db);
    });
}