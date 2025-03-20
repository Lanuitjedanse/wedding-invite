<script setup>
import * as v from "valibot";

const schema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email")),
  name: v.pipe(v.string(), v.minLength(1, "Must be at least 1 character")),
  lastName: v.pipe(v.string(), v.minLength(1, "Must be at least 1 character")),
  steps: v.pipe(v.array(v.string()), v.minLength(1, "Must be at least 1 step")),
});

const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["submit"]);

const { participants } = useParticipants();

const state = ref({
  email: "",
  name: "",
  lastName: "",
  additionalParticipants: "+0",
  steps: [],
});

const items = ref(["+0", "+1", "+2", "+3", "+4"]);
const steps = ref(props.steps);

const toast = useToast();

function onSubmit({ data }) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });

  state.value = {
    email: "",
    name: "",
    lastName: "",
    additionalParticipants: "+0",
    steps: [],
  };

  participants.value.push(data);
}
</script>

<template>
  <UForm
    :schema="v.safeParser(schema)"
    :state="state"
    class="p-4 space-y-4 w-full"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email" class="grow">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Name" name="name">
      <UInput v-model="state.name" type="name" />
    </UFormField>

    <UFormField label="Lastname" name="lastName">
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

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
