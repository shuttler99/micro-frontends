const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("../package.json");

const commonConfig = require("./webpack.common");

const { ModuleFederationPlugin } = require("webpack").container;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },

  devServer: {
    port: 8081,
    historyApiFallback: { index: "/index.html" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
