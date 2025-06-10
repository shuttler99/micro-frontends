const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");

const domain = process.env.PRODUCTION_DOMAIN;

const webpackCommon = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    //this is the path which will be access by the user
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(prodConfig, webpackCommon);
