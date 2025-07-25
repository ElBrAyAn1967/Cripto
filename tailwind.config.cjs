/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(220, 135, 30)", /**Color Bitcoin dineros */
        secondaryColor: "rgb(21 229 244)", /*Color azul claro */ 
        primaryText: "#FAFAFA", /*Color blanco */
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "rgb(31, 32, 35)",
        bgDark2: "rgb(38, 39, 43)",
        bgDark3: "rgb(48, 49, 54)",
        bgDark3Hover: "rgb(55, 56, 62)",
        bgDarkTransparent: "rgba(31, 32, 35, 0.7)", // <-- aquí también: usa rgba no rgb()
        bgDarkTransparentDarker: "rgba(0, 0, 0, 0.5)",
        bgDarkTransparentLighter: "rgba(48, 49, 54, 0.7)",
        mainBorder: "rgba(255, 255, 255, 0.15)",
        mainBorderDarker: "rgba(255, 255, 255, 0.07)",
        quoteIconColor: "rgb(178, 184, 205)"
      },
      fontFamily: {
   sans: ["'Mona Sans'", "sans-serif"],
  mona: ["'Mona Sans'", "sans-serif"],     
  hubot: ["'Hubot Sans'", "sans-serif"],
},

      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};
