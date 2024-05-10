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
          "200": "#a68a21",
        },
        sandybrown: "#e2ac5b",
        whitesmoke: {
          "100": "#f5f5f7",
          "200": "#f2f2f2",
        },
        dimgray: "#555",
        gray: {
          "100": "#251e04",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(0, 0, 0, 0.05)",
          "500": "rgba(0, 0, 0, 0.1)",
        },
        olive: "#8d7008",
        gainsboro: "rgba(217, 217, 217, 0.5)",
        darkslategray: {
          "100": "#3f3e45",
          "200": "rgba(51, 51, 51, 0.05)",
        },
        lightgray: "#d6d6d6",
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
        "5xs-4": "7.4px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      "8xl-4": "27.4px",
      "4xl-1": "23.1px",
      "5xl-1": "24.1px",
      lgi: "19px",
      "4xl-9": "23.9px",
      "3xl-9": "22.9px",
      "4xl-3": "23.3px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "lgi-4": "19.4px",
      "14xl-3": "33.3px",
      xl: "20px",
      "8xl": "27px",
      "base-1": "16.1px",
      xs: "12px",
      "3xl-5": "22.5px",
      "mini-8": "14.8px",
      "18xl-1": "37.1px",
      "11xl": "30px",
      sm: "14px",
      "3xs-3": "9.3px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
