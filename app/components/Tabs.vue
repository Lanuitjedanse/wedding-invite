<script setup>
defineProps({ steps: { type: Array, required: true } });
const items = ref([
  {
    id: ETabs.SUBSCRIBE,
    label: "Subscribe",
    icon: "line-md:account-add",
  },
  {
    id: ETabs.INVITEES_LIST,
    label: "Invitees List",
    icon: "line-md:list",
  },
]);
</script>

<template>
  <UTabs :items="items" class="flex flex-col min-h-content items-center">
    <template #content="{ item }">
      <Form v-if="item.id === ETabs.SUBSCRIBE" :steps="steps" />
      <InviteesList v-if="item.id === ETabs.INVITEES_LIST" />
    </template>
  </UTabs>
</template>
