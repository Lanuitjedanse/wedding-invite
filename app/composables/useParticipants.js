export const useParticipants = () => {
  const participants = useState("participants", () => []);

  const getTotalNumberOfParticipants = computed(() => {
    const query = (participant) => participant;
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberVege = computed(() => {
    const query = (participant) => participant.diet === "vegetarian";
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberMeat = computed(() => {
    const query = (participant) => participant.diet === "meat";
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberCeremony = computed(() => {
    const query = (participant) => participant.steps.includes("ceremony");
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberCocktail = computed(() => {
    const query = (participant) => participant.steps.includes("cocktail");
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberDinner = computed(() => {
    const query = (participant) => participant.steps.includes("dinner");
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberParty = computed(() => {
    const query = (participant) => participant.steps.includes("party");
    return filterParticipants(participants.value, query);
  });

  const getTotalNumberBrunch = computed(() => {
    const query = (participant) => participant.steps.includes("brunch");
    return filterParticipants(participants.value, query);
  });
  const filterParticipants = (participants, query) => {
    return participants
      ?.filter((i) => query(i))
      ?.reduce((sum, i) => sum + (i?.additionalParticipants || 0) + 1, 0);
  };

  return {
    participants,
    getTotalNumberOfParticipants,
    getTotalNumberMeat,
    getTotalNumberVege,
    getTotalNumberCeremony,
    getTotalNumberCocktail,
    getTotalNumberDinner,
    getTotalNumberParty,
    getTotalNumberBrunch,
  };
};
