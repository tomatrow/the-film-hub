const fs = require("fs").promises
const format = require("./formatZen.js")

module.exports = function (snowpackConfig, pluginOptions) {
    return {
        name: "format-zen",
        config() {
            console.log("Success!")
        },
        async onChange({ filePath }) {
            const source = await fs.readFile(filePath, "utf8")
            const formatted = format(source, filePath)
            if (formatted && formatted !== source) fs.writeFile(filePath, formatted)
        }
    }
}
