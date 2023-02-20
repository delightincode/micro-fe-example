// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  entry: "./src/main.js",
  output: {
    publicPath: "http://localhost:8082/",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource"
      }
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "message",
      filename: "remoteEntry.js",
      exposes: {
        "./Message": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
