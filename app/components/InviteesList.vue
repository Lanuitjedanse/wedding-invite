<script setup>
const { participants } = useParticipants();

const UBadge = resolveComponent("UBadge");

const columns = [
  {
    accessorKey: "fullName",
    header: "Name",
    cell: ({ row }) => `${row.getValue("fullName")}`,
  },
  {
    accessorKey: "steps",
    header: "Steps",
    cell: ({ row }) => {
      const color = {
        ceremony: "primary",
        party: "secondary",
        cocktail: "neutral",
        brunch: "info",
        dinner: "warning",
      };

      const values = row.getValue("steps");

      return values.map((item) => {
        return h(
          UBadge,
          {
            class: "capitalize mx-0.5 text-xs",
            variant: "subtle",
            color: color[item],
          },
          () => item
        );
      });
    },
  },
  {
    accessorKey: "diet",
    header: "Diet",
    cell: ({ row }) => {
      const color = {
        vegetarian: "success",
        meat: "error",
      }[row.getValue("diet")];

      const icon = {
        vegetarian: "fluent-emoji-flat:herb",
        meat: "fluent-emoji-flat:meat-on-bone",
      }[row.getValue("diet")];

      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color, icon },
        () => row.getValue("diet")
      );
    },
  },
  {
    accessorKey: "additionalParticipants",
    header: "Additional Participants",
    cell: ({ row }) => `+${row.getValue("additionalParticipants")}`,
  },
];

watchEffect(() => {
  console.log("Table received updated participants:", participants.value);
});
</script>

<template>
  <UTable
    :data="participants"
    :columns="columns"
    sticky
    :key="participants.length"
    class="min-h-98"
  />
</template>
