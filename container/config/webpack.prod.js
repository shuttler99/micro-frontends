const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");

const marketingUrl = process.env.PRODUCTION_DOMAIN;

const webpackCommon = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${marketingUrl}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(prodConfig, webpackCommon);
