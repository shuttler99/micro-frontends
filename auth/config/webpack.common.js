module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};


// when we will have multiple use cases for the same loader, we can use the `use` option with an array of objects, each with its own `loader` and `options` properties. For example:

// use: [
//   { loader: 'style-loader' },
//   { loader: 'css-loader' },
// ]


//most babel plugins are installed as dev dependencies