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
    class="flex-1 min-h-120"
  />
</template>
