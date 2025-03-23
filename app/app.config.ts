export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "pink",
      secondary: "indigo",
      success: "green",
      info: "cyan",
      error: "red",
      neutral: "zinc",
    },
    container: {
      base: "max-w-(--ui-container) h-full mx-auto p-4 sm:x-6 lg:p-8",
    },
    tabs: {
      slots: {
        root: "flex h-full items-center gap-2",
      },
    },
    table: {
      slots: {
        th: "px-2 py-3.5 text-sm text-(--ui-text-highlighted) text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
        td: "p-2 text-sm text-(--ui-text-muted) whitespace-nowrap [&:has([role=checkbox])]:pe-0",
      },
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
    formField: {
      slots: {
        root: "grow",
      },
    },
  },
});
