const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("../package.json");

const commonConfig = require("./webpack.common");

const { ModuleFederationPlugin } = require("webpack").container;

const devConfig = {
  mode: "development",

  output: {
    publicPath: "http://localhost:8083/",
  },

  devServer: {
    port: 8083,
    historyApiFallback: { index: "/index.html" },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
