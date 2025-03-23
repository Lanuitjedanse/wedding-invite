<script setup>
import * as v from "valibot";

const schema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email")),
  diet: v.pipe(v.string(), v.minLength(1, "Select a diet")),
  firstName: v.pipe(v.string(), v.minLength(1, "Must be at least 1 character")),
  lastName: v.pipe(v.string(), v.minLength(1, "Must be at least 1 character")),
  steps: v.pipe(v.array(v.string()), v.minLength(1, "Must be at least 1 step")),
});

const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
  diet: { type: Array, default: () => [] },
});

const emit = defineEmits(["submit"]);

const { participants } = useParticipants();

const state = ref({
  email: "",
  firstName: "",
  lastName: "",
  additionalParticipants: 0,
  steps: [],
  diet: "",
});

const items = ref([0, 1, 2, 3, 4]);

const toast = useToast();

async function onSubmit({ data }) {
  try {
    await $fetch("/api/invitee", {
      method: "POST",
      body: data,
    });

    toast.add({
      title: "Success",
      description: "Thanks for joining us!",
      color: "success",
    });
  } catch (err) {
    toast.add({
      title: "Error",
      description: err.message,
      color: "error",
    });
  }

  emptyForm();

  await getParticipants();
}

const getParticipants = async () => {
  const { invitees } = await $fetch("/api/invitees", {
    method: "GET",
  });
  participants.value = invitees;
};

const emptyForm = () => {
  state.value = {
    email: "",
    firstName: "",
    lastName: "",
    additionalParticipants: "+0",
    steps: [],
    diet: "",
  };
};
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="p-4 space-y-4 w-full"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="First name" name="firstName">
      <UInput v-model="state.firstName" type="firstName" />
    </UFormField>

    <UFormField label="Last name" name="lastName">
      <UInput v-model="state.lastName" type="lastName" />
    </UFormField>

    <UFormField label="Steps" name="steps">
      <USelect
        v-model="state.steps"
        multiple
        :items="steps"
        valueKey="id"
        class="w-48"
      >
        <template #item-label="{ item }">
          {{ item.title }}
        </template>
      </USelect>
    </UFormField>

    <UFormField label="Additional Participants" name="additionalParticipants">
      <USelect
        v-model="state.additionalParticipants"
        :items="items"
        class="w-48"
      />
    </UFormField>

    <UFormField label="Choose your diet" name="diet">
      <USelect v-model="state.diet" :items="diet" class="w-48" />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
