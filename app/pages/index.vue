<script setup>
const steps = [
  {
    id: "ceremony",
    title: "Ceremony",
    label: "Ceremony",
    value: "Ceremony",
    icon: "fluent-emoji-flat:wedding",
  },
  {
    id: "cocktail",
    title: "Drinks",
    label: "Drinks",
    value: "Drinks",
    icon: "fluent-emoji-flat:bottle-with-popping-cork",
  },
  {
    id: "dinner",
    title: "Dinner",
    label: "Dinner",
    value: "Dinner",
    icon: "fluent-emoji-flat:pot-of-food",
  },
  {
    id: "party",
    title: "Party",
    label: "Party",
    value: "Party",
    icon: "fluent-emoji-flat:confetti-ball",
  },
  {
    id: "brunch",
    title: "Brunch",
    label: "Brunch",
    value: "Brunch",
    icon: "fluent-emoji-flat:baguette-bread",
  },
];

const diet = [
  {
    id: "meat",
    title: "Meat",
    label: "Meat",
    value: "meat",
    icon: "fluent-emoji-flat:meat-on-bone",
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    label: "Vegetarian",
    value: "vegetarian",
    icon: "fluent-emoji-flat:herb",
  },
];

const { invitees } = await $fetch("/api/invitees", {
  method: "GET",
});

const { participants } = useParticipants();
participants.value = invitees;
</script>

<template>
  <div class="h-full w-full">
    <NuxtImg
      class="object-cover rounded-sm h-full w-full"
      src="/images/saveTheDate.png"
    />

    <UContainer>
      <Stepper :steps="steps"></Stepper>
    </UContainer>

    <Tabs :steps="steps" :diet="diet" />
  </div>
</template>
