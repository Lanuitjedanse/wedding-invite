export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "pink",
      secondary: "indigo",
      success: "blue",
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
