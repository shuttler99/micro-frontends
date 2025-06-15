const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");

const domain = "https://d2mma1qrf02kvz.cloudfront.net";

const webpackCommon = require("./webpack.common");
const webpack = require("webpack");

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
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),

    new webpack.DefinePlugin({
      "process.env.PRODUCTION_DOMAIN": JSON.stringify(
        process.env.PRODUCTION_DOMAIN
      ),
    }),
  ],
};

module.exports = merge(prodConfig, webpackCommon);
