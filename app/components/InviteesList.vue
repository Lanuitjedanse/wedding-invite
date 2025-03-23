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

      const icon = {
        ceremony: "fluent-emoji-flat:wedding",
        cocktail: "fluent-emoji-flat:bottle-with-popping-cork",
        dinner: "fluent-emoji-flat:pot-of-food",
        brunch: "fluent-emoji-flat:baguette-bread",
        party: "fluent-emoji-flat:confetti-ball",
      };

      const values = row.getValue("steps");

      return h(
        "div",
        { class: "flex flex-col gap-1 items-start" },
        values.map((item) =>
          h(
            UBadge,
            {
              class: "capitalize",
              variant: "subtle",
              icon: icon[item],
              color: color[item],
            },
            () => item
          )
        )
      );
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
    header: "Guests",
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
    class="max-h-98 min-h-64"
  />
</template>
