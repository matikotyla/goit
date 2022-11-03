const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = function () {
  return {
    mode: "production",
    entry: ["./src/app.js"],
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack starter project",
        template: path.resolve("./src/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackInlineSVGPlugin({
        inlineAll: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
          },
        },
      ],
    },
  };
};
