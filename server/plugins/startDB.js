import { MongoClient, ServerApiVersion } from "mongodb";

export default defineNitroPlugin(async (nitroApp) => {
  const { mongoUri } = useRuntimeConfig();

  const client = new MongoClient(mongoUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const db = client.db("wedding");

    nitroApp.mongo = client;
    nitroApp.db = db;

    return { client, db };
  } catch (err) {
    console.log(err);
  }
});
