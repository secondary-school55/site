const withMdx = require("@next/mdx")({ extension: /\.mdx?$/ });
const withYaml = require("next-plugin-yaml");
const withXlsx = require("./plugins/next-plugin-xlsx");

module.exports = withYaml(withMdx(withXlsx({ pageExtensions: ["js", "md"] })));
