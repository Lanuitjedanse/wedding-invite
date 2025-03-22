<script setup>
import InviteesList from "~/components/InviteesList.vue";

const steps = [
  {
    id: "ceremony",
    title: "Ceremony",
    value: "Ceremony",
    icon: "fluent-emoji-flat:wedding",
  },
  {
    id: "cocktail",
    title: "Drinks",
    value: "Drinks",
    icon: "fluent-emoji-flat:bottle-with-popping-cork",
  },
  {
    id: "dinner",
    title: "Dinner",
    value: "Dinner",
    icon: "fluent-emoji-flat:pot-of-food",
  },
  {
    id: "party",
    title: "Party",
    value: "Party",
    icon: "fluent-emoji-flat:confetti-ball",
  },
  {
    id: "brunch",
    title: "Brunch",
    value: "Brunch",
    icon: "fluent-emoji-flat:baguette-bread",
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

    <Tabs :steps="steps" />
  </div>
</template>
