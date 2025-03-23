export default defineEventHandler(async (event) => {
  try {
    const { db } = useNitroApp();
    const newInvitee = await readBody(event);

    const result = await db.collection("invitees").insertOne(newInvitee);

    if (result.acknowledged) {
      return {
        message: "Invitee added successfully",
        invitee: { ...newInvitee, _id: result.insertedId },
      };
    } else {
      throw new Error("Failed to insert invitee.");
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: error.message,
    });
  }
});
