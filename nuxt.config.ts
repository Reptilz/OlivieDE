import { resolve } from "path";


export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
})
