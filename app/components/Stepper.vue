<script setup>
defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
});

const active = ref(0);
</script>

<template>
  <UContainer>
    <UStepper
      v-model="active"
      :items="steps"
      orientation="vertical"
      class="w-full h-full pt-4"
    >
      <template #content="{ item }">
        <div
          class="p-4 w-full h-full flex flex-col justify-center xl:w-32 items-center"
        >
          <NuxtImg
            :src="`images/${item.id}.png`"
            class="md:w-98 xl:98 object-cover"
          />
        </div>
      </template>
    </UStepper>
  </UContainer>
</template>
