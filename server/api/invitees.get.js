export default defineEventHandler(async () => {
  try {
    const { mongo: client } = useNitroApp();

    // Check if the client is defined (it should be initialized globally)
    if (!client) {
      throw new Error("MongoDB client is not initialized.");
    }

    // Perform a query operation, the client will throw if not connected
    const db = client.db("wedding");
    const invitees = await db.collection("invitees").find({}).toArray();

    if (invitees && invitees.length > 0) {
      return { invitees }; // Return the invitees if found
    } else {
      return { message: "No invitees found" }; // Return a message if no invitees found
    }
  } catch (error) {
    console.error("Error fetching invitees:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: error.message,
    });
  }
});
