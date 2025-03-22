<script setup>
const { participants } = useParticipants();
const computedParticipants = computed(() => [...participants.value]);

watchEffect(() => {
  console.log(
    "Table received updated participants:",
    computedParticipants.value
  );
});
</script>

<template>
  <UTable
    :data="computedParticipants"
    :key="computedParticipants.length"
    class="min-h-98"
  />
</template>
