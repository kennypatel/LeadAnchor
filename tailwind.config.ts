import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        anchor: {
          navy: "#071421",
          ink: "#0e1f32",
          steel: "#5f7084",
          line: "#d9e2ec",
          mist: "#f4f8fb",
          blue: "#2563eb",
          cyan: "#0ea5e9",
          green: "#18a957",
          lime: "#ccf7d4"
        }
      },
      boxShadow: {
        panel: "0 18px 60px rgba(7, 20, 33, 0.12)",
        soft: "0 10px 30px rgba(7, 20, 33, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
