import sveltePreprocess from "svelte-preprocess"
import adapterStatic from "@sveltejs/adapter-static"
import format from "./scripts/zen/format.js"

const production = process.env.NODE_ENV === "production"

/** @type {import('@sveltejs/kit').Config} */
export default {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        sveltePreprocess({
            defaults: {
                style: "postcss"
            },
            postcss: true
        })
    ],

    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: adapterStatic(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        // ssr: false,

        paths: {
            assets: production ? "/wp-content/plugins/thread-and-point/" : ""
        },

        prerender: {
            crawl: false,
            pages: ["/filmvista", "/vendvista"]
        },

        vite: {
            base: production ? "/wp-content/plugins/thread-and-point/" : "/",
            plugins: [
                format({
                    load: true // I think this fixes certain issues
                })
            ]
        }
    }
}
