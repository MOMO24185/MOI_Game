/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkgoldenrod: {
          "100": "#b68a35",
          "200": "#b58934",
        },
        sandybrown: "#e2ac5b",
        dimgray: {
          "100": "#6f6f6f",
          "200": "#555",
        },
        whitesmoke: {
          "100": "#f5f5f7",
          "200": "#f2f2f2",
        },
        gray: {
          "100": "#251e04",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(0, 0, 0, 0.05)",
          "500": "rgba(0, 0, 0, 0.1)",
        },
        olive: "#8d7008",
        gainsboro: "rgba(217, 217, 217, 0.5)",
        lightgray: "#d6d6d6",
        crimson: "#c2002f",
        darkslategray: "#3f3e45",
        darkgray: "#969696",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        sanchez: "Sanchez",
      },
      borderRadius: {
        "8xs-7": "4.7px",
        "8xs-8": "4.8px",
        "11xl": "30px",
        "5xs-4": "7.4px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "4xl": "23px",
      "21xl": "40px",
      "8xl-4": "27.4px",
      base: "16px",
      "lgi-4": "19.4px",
      lgi: "19px",
      "5xl": "24px",
      xl: "20px",
      xs: "12px",
      "3xl-5": "22.5px",
      "mini-8": "14.8px",
      "18xl-1": "37.1px",
      "3xs": "10px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
