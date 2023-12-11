const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  darkMode: "media",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.zinc[200]"),
            "--tw-prose-quotes": theme("colors.zinc[400]"),
            "--tw-prose-body": theme("colors.zinc[300]"),
            "--tw-prose-links": theme("colors.teal[400]"),
            "--tw-prose-th-borders": theme("colors.zinc[700]"),
            "--tw-prose-td-borders": theme("colors.zinc[700]"),

            tr: {
              "border-bottom-width": 0,
            },

            table: {
              "margin-top": 0,
              "margin-bottom": 0,
            },

            pre: {
              padding: "0",
              color: "#1F2933",
              backgroundColor: "#F3F3F3",
              fontFamily: "GeistMono",
            },
            code: {
              padding: "0.2em 0.4em",
              backgroundColor: theme("colors.zinc[800]"),
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem",
              fontFamily: "GeistMono",
            },
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
      fontFamily: {
        sans: ["Geist"],
        mono: ["GeistMono"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
