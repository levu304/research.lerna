const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // the main source code file
  mode: "production",
  entry: { index: "./src/index.ts" },
  output: {
    // the output file name
    filename: "[name].js",
    // the output path
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: [nodeExternals()],
  externalsPresets: { node: true },
  target: "node",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
