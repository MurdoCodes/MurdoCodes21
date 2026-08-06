import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#12141A",
        "bg-2": "#171A21",
        card: "#1B1E27",
        ember: "#FF6B35",
        glacier: "#DCE8EE",
        text: "#F2F0EA",
        muted: "#8A8D95",
        line: "rgba(242,240,234,0.08)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
