"use strict";

const { connectToDatabase } = require('./mongoClient');

async function readRecords(userId) {
  const db = await connectToDatabase();
  const collection = db.collection('user_location');
  console.log('Reading the database');

  try {
    // Find all documents in the collection
    const documents = await collection.find({}).toArray();

    // Filter Data by userID
    let requiredData;
    if (userId) {
        requiredData = documents.filter(user => user.userId === userId);
    } else {
        requiredData = documents;
    }

    // Log the retrieved documents
    //console.log('Retrieved documents:', documents);
    console.log('Retrieved documents:', requiredData);
    return requiredData;
  } catch (error) {
    console.error('Error reading data:', error);
  }
}

readRecords();
module.exports = readRecords;