
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://spandya:mongodb17@cluster0.y2qc2ob.mongodb.net/db2?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const dbName = client.db().databaseName;
    console.log('dbName', dbName);
    return client.db();
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

module.exports = { connectToDatabase };
