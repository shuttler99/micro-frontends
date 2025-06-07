const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../../../packages/container/package.json");
const { merge } = require("webpack-merge");

const marketingUrl = process.env.PRODUCTION_DOMAIN;

const webpackCommon = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
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
