module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        minmax: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      colors: {
        white: "#edf6fe",
        danger: "#d25a5c",
        success: "#33a164",
        warning: "#e1bf6d",
        "primary-blue": "#2861eb",
        "primary-gray": "#151517",
        "secondry-gray": "#1d2028",
        "primary-btn": "#151417",
      },
    },
  },
  plugins: [],
};
