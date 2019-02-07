const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
  webpack: function(config) {
    config.externals.push("fs");
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader"
    });
    return config;
  }
});
