import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        borderC: "#D9DEE2",
        borderCLight: "#D9DEE2CB",
        textC: "#1a2129",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mainTheme: {
          primary: "#25BBB7",
          secondary: "#434D56",
          accent: "#94EBE8",
          neutral: "#F6F8F9",
          info: "#0891b2",
          success: "#10b981",
          warning: "#facc15",
          error: "#f43f5e",
          "--fallback-pc": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
