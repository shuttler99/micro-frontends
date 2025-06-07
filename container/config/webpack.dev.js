const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");

const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../../../packages/marketing/package.json");

const devConfig = {
  //to define on which mode we need to run the application
  mode: "development",
  //the development servewr
  devServer: {
    port: 8080,
    historyApiFallback: { index: "index.html" },
  },
  plugins: [
    //where our main html file will be defined
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
