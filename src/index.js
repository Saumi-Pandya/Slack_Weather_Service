"use strict"

const {app} = require('./app');
require('./mongodb/read');
require('./mongodb/mongoClient');
require(`./controller`);
require('dotenv').config();

// async function dbConnect() {
//     try {
//       const db = await connectToDatabase();
//       console.log('Connection established with the database')
//       // Your application logic using the connected MongoDB database
//       // ...
  
//       // Example: Close the connection when the application is done
//       //await db.client.close();
//     } catch (error) {
//       console.error('Error starting the application:', error);
//     }
//   }
  
// dbConnect();

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('SlackBolt is running');
})();

