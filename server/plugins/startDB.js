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
    if (!nitroApp?.mongo) {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      const db = client.db("wedding");

      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );

      nitroApp.mongo = client;
      nitroApp.db = db;

      nitroApp.hooks.hook("close", async () => {
        console.log("Closing database connection...");
        await client.close();
      });

      return { client, db };
    }
  } catch (err) {
    console.log("Error when connecting to mongodb: ", err);

    if (nitroApp.mongo) {
      await nitroApp.mongo.close();
      nitroApp.mongo = "";
      nitroApp.db = "";
    }
  }
});
