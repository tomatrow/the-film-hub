const fs = require("fs")
const prettier = require("prettier")
const postcss = require("postcss")
const sorting = require("postcss-sorting")
const { join } = require("path")

function formatContents(filepath, source) {
    return prettier.format(source, {
        filepath,
        arrowParens: "avoid",
        semi: false,
        singleQuote: false,
        pluginSearchDirs: ["."],
        tabWidth: 4,
        trailingComma: "none",
        printWidth: 100
    })
}

function formatCss(filepath, source, zen, zenTailwind) {
    return filepath && (filepath.endsWith(".svelte") || filepath.endsWith(".html"))
        ? source
              .replace(/(?<=class=").+?(?=")/g, o =>
                  (o.match(/(?:[^\s]+)?{.+}(?:[^\s]+)?|[^\s]+/g) || [])
                      .sort((a, b) =>
                          a.startsWith("{") && b.startsWith("{")
                              ? a > b
                                  ? -1
                                  : 1
                              : a.startsWith("{")
                              ? -1
                              : b.startsWith("{")
                              ? 1
                              : zenTailwind.indexOf(a) - zenTailwind.indexOf(b)
                      )
                      .join(" ")
              )
              .replace(
                  /<style(.*?)>(.+?)<\/style>/gs,
                  (_, p1, p2) => `<style${p1}>${formatCss(null, p2, zen)}</style>`
              )
        : postcss([sorting({ "properties-order": zen })]).process(source, {
              from: filepath,
              to: filepath
          }).css
}

const zen = fs.readFileSync(join(__dirname, "zen"), "utf8").split("\n")
const zenTailwind = fs.readFileSync(join(__dirname, "zen-tailwind"), "utf8")

module.exports = function (source, filepath) {
    let formatted = formatContents(filepath, source)
    if (filepath.endsWith(".svelte") || filepath.endsWith(".html") || filepath.endsWith(".css"))
        formatted = formatCss(filepath, formatted, zen, zenTailwind)
    return formatted
}
