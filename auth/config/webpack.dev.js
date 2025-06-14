const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("../package.json");

const commonConfig = require("./webpack.common");

const { ModuleFederationPlugin } = require("webpack").container;

const devConfig = {
  mode: "development",

  output: {
    publicPath: "http://localhost:8082/",
  },

  devServer: {
    port: 8082,
    historyApiFallback: { index: "/index.html" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
