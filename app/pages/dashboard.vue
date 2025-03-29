<script setup>
const { invitees } = await $fetch("/api/invitees", {
  method: "GET",
});

const {
  participants,
  getTotalNumberOfParticipants,
  getTotalNumberVege,
  getTotalNumberMeat,
  getTotalNumberCeremony,
  getTotalNumberCocktail,
  getTotalNumberDinner,
  getTotalNumberParty,
  getTotalNumberBrunch,
} = useParticipants();

onMounted(() => {
  participants.value = invitees;
});

const allParticipants = computed(() => [
  { value: getTotalNumberOfParticipants, text: "People joining", icon: "" },
  {
    value: getTotalNumberCeremony,
    text: "joining Ceremony",
    icon: "fluent-emoji-flat:wedding",
  },
  {
    value: getTotalNumberCocktail,
    text: "joining Cocktail",
    icon: "fluent-emoji-flat:bottle-with-popping-cork",
  },
  {
    value: getTotalNumberDinner,
    text: "joining Dinner",
    icon: "fluent-emoji-flat:pot-of-food",
  },
  {
    value: getTotalNumberParty,
    text: "joining Party",
    icon: "fluent-emoji-flat:confetti-ball",
  },
  {
    value: getTotalNumberBrunch,
    text: "joining Brunch",
    icon: "fluent-emoji-flat:baguette-bread",
  },
  {
    value: getTotalNumberVege,
    text: "Vegetarians",
    icon: "fluent-emoji-flat:herb",
  },
  {
    value: getTotalNumberMeat,
    text: "Carnivores",
    icon: "fluent-emoji-flat:meat-on-bone",
  },
]);
</script>

<template>
  <UContainer>
    <div
      class="xs:flex xs:flex-col xs:justify-center xs:items-center sm:grid sm:grid-cols-3 sm:gap-6 min-h-screen sm:my-auto sm:h-max sm:place-content-center"
    >
      <div
        v-for="participant in allParticipants"
        :key="`item-${participant.text}`"
        class="flex flex-col font-bold"
        :class="participant.styles"
      >
        <h3 class="text-6xl">{{ participant.value }}</h3>
        <p class="text-3xl">{{ participant.text }}</p>
      </div>
    </div>
  </UContainer>
</template>
