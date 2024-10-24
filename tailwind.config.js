/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primary1: "#363738",
      Secondary: "#F5F5F5",
      Secondary1: "#FEFAF1",
      BG: "#FFFFFF",
      Text: "#FAFAFA",
      Text1: "#7D8184",
      Text2: "#000000",
      Button: "#000000",
      Button1: "#00FF66",
      Button2: "#DB4444",
      "Hover Button": "#E07575",
      "Secondary 2": "#DB4444",
      "30% 1px": "rgba(0, 0, 0, 0.3)",
    },
    fontWeight: {
      bold: 700,
    },
    fontFamily: {
      poppins: ["poppins"],
      inter: ["Inter"],
    },
    fontSize: {
      12: 12,
      16: 16,
      24: 24,
      36: 36,
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        full: "1440px",
      },
      padding: {
        pageSide: "0 135px",
        16: "16px",
        40: "40px",
      },
    },
  },
  plugins: [],
};
