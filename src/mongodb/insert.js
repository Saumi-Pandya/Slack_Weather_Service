"use strict"

const { connectToDatabase } = require('./mongoClient');

require('./mongoClient');

async function insertRecords(documentsToInsert) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('user_location');
        console.log('Inserting into the database');

        const result = await collection.insertMany(documentsToInsert);
        console.log('Inserted document IDs:', result.insertedIds);
    } catch (error) {
        console.log('insert error :- ', error);
    }
}

module.exports = insertRecords;