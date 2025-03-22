export default defineEventHandler(async (event) => {
  try {
    const { mongo: client } = useNitroApp();

    // Check if the MongoDB client is initialized and connected
    if (!client) {
      throw new Error("MongoDB client is not initialized.");
    }

    // Connect to the database
    const db = client.db("wedding");

    // Extract the request body which contains the newInvitee data
    const newInvitee = await readBody(event); // Extract the body of the request

    // Validate that required fields are present (you can customize this validation)
    if (!newInvitee.email) {
      throw new Error("Name and email are required.");
    }

    // Insert the new invitee into the "invitees" collection
    const result = await db.collection("invitees").insertOne(newInvitee);

    // Check if the insertion was successful
    if (result.acknowledged) {
      // If successful, return a response with the inserted invitee and a success message
      return {
        message: "Invitee added successfully",
        invitee: { ...newInvitee, _id: result.insertedId }, // Include the inserted ID
      };
    } else {
      throw new Error("Failed to insert invitee.");
    }
  } catch (error) {
    // Handle any errors that occur during the operation
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: error.message,
    });
  }
});
