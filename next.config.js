const withYaml = require("next-plugin-yaml");
const withXlsx = require("./plugins/next-plugin-xlsx");

module.exports = withYaml(
  withXlsx({
    webpack: (config) => {
      config.module.rules.push({
        test: require.resolve(`${__dirname}/lib/posts`),
        use: [{ loader: "val-loader" }],
      });
      return config;
    },
  })
);
