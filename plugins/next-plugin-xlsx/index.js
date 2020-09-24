const path = require("path");

const withXlsx = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.xlsx$/,
        use: path.resolve(__dirname, "./loader.js"),
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  });
};

module.exports = withXlsx;
