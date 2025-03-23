export default defineEventHandler(async (event) => {
  try {
    const { db } = useNitroApp();

    const invitees = await db.collection("invitees").find({}).toArray();

    if (invitees && invitees.length > 0) {
      const formattedInvites = invitees.map((item) => ({
        fullName: `${item.firstName} ${item.lastName}`,
        steps: item.steps,
        additionalParticipants: item.additionalParticipants,
        diet: item?.diet,
      }));

      return { invitees: formattedInvites };
    } else {
      return { invitees: [] };
    }
  } catch (error) {
    console.error("Error fetching invitees:", error);
    return { invitees: [] };
  }
});
