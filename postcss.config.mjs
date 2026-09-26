const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
          elevated: "var(--color-surface-elevated)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        border: "var(--color-border)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
    },
  },
};

export default config;
