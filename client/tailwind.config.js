/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        dropDown: {
          "0%": {
            height: "0vh",
            opacity: "0",
            color: "transparent",
          },
          "100%": {
            "max-height": "500px",
            opacity: "1",
          },
        },
        bounce2: {
          "0%": { opacity: "0" },
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)", opacity: "1" },
          "60%": { transform: "translateY(-10px)" },
        },
        shake: {
          "0%": {
            opacity: "0",
            "margin-left": "0rem",
          },
          "25%": {
            opacity: "1",
            "margin-left": "0.3rem",
          },
          "50%": {
            "margin-left": "-0.3rem",
          },
          "75%": {
            "margin-left": "0.3rem",
          },
          "100%": {
            "margin-left": "0rem",
          },
        },
      },
      animation: {
        dropDown: "dropDown 0.4s forwards",
        bounce2: "bounce2 2s ease forwards",
        shake: "shake 0.4s ease forwards",
      },
    },
    colors: {
      //Light mode colors:
      primary: "#FFFFFF",
      secondary: "#EEEEEE",
      txtprimary: "#000000",
      txtsecondary: "#FFFFFF",
      txthover: "#00ABB3",
      //Dark mode colors:
      darkPrimary: "#171717",
      darkSecondary: "#333333",
      darkTxtprimary: "#EDEDED",
      darkTxtsecondary: "#171717",
      darkTxthover: "#D41010",
      //Static colors:
      accent: "#D41010",
      secondAccent: "#ffc500",
      white: "#FFFFFF",
      black: "#000000",
      extra: "#EAEAEA",
      transparent: "transparent",
      borderOutline: "#DADDEC",
      success: "#4BB543",
      danger: "#EE4B2B",
    },
  },
  plugins: [],
};
