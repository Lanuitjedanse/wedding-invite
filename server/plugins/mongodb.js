import { MongoClient, ServerApiVersion } from "mongodb";

export default defineNitroPlugin(async () => {
  const env = useRuntimeConfig();

  // MongoDB Atlas URI
  const url = env.private.mongoUri;

  // Replace the placeholder with your Atlas connection string
  const uri = "<connection string>";

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      const instance = await client.connect();

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );

      global.mongoClient = instance;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});
