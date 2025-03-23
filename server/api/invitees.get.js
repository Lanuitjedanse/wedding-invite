export default defineEventHandler(async (event) => {
  try {
    const { db } = useNitroApp();

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
