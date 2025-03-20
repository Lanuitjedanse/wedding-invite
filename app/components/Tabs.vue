<script setup>
const items = ref([
  {
    id: ETabs.EVENT_DETAILS,
    label: "Event details",
    icon: "line-md:iconify2-static",
  },
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
  <UTabs :items="items" class="flex flex-col">
    <template #content="{ item }">
      <Form v-if="item.id === ETabs.SUBSCRIBE" />
      <Stepper v-if="item.id === ETabs.EVENT_DETAILS" />
    </template>
  </UTabs>
</template>
