const withMdx = require("@next/mdx")({ extension: /\.mdx?$/ });
const withYaml = require("next-plugin-yaml");
const withXlsx = require("./plugins/next-plugin-xlsx");

module.exports = withYaml(
  withMdx(
    withXlsx({
      pageExtensions: ["js", "md"],
      webpack: (config) => {
        config.module.rules.push({
          test: require.resolve(`${__dirname}/lib/posts`),
          use: [{ loader: "val-loader" }],
        });
        return config;
      },
    })
  )
);
