import { MongoClient, ServerApiVersion } from "mongodb";

export default defineNitroPlugin(async (nitroApp) => {
  const env = useRuntimeConfig();

  // MongoDB Atlas URI
  const url = env.mongoUri;

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

      nitroApp.mongo = instance;
    } catch (err) {
      console.log("err in mongoDB connection", err);
    }
  }
  run().catch(console.dir);
});
