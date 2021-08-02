const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles")

module.exports = {
    mode: "jit",
    purge: {
        content: ["./src/**/*.{html,js,svelte,ts}"]
    },
    theme: {
        extend: {
            colors: {
                primary: "#88a795",
                secondary: "#3c7784",
                light: "#e9e9e8",
                grey: "#7a7b7b"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require("@tailwindcss/aspect-ratio")]
}
