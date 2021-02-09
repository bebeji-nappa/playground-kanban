const path = require("path")
const { VueLoaderPlugin } = require("vue-loader-v16")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")

const ROOT_DIR = __dirname
const SRC_DIR = path.resolve(ROOT_DIR, "app", "frontend")
const PUBLIC_DIR = path.resolve(ROOT_DIR, "public")
const DIST_DIR = path.resolve(PUBLIC_DIR, "packs")
const ENTRY_FILE = path.resolve(SRC_DIR, "entries/index.ts")
const STYLE_SHEET = path.resolve(SRC_DIR, "styles/assets.scss")
const OUT_FILENAME = "bundle.js"
const { DEV_SERVER } = process.env
const isDevServer = DEV_SERVER === "true"

module.exports = {
  mode: "development",
  entry: [ENTRY_FILE, STYLE_SHEET],
  output: {
    path: DIST_DIR,
    publicPath: isDevServer ? "//localhost:8081/packs/" : "/packs/",
    filename: OUT_FILENAME,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader-v16"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          allowTsInNodeModules: true,
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {},
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".d.ts", ".vue", ".css", ".scss"],
    alias: {
      "@": SRC_DIR,
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({
      publicPath: "",
      writeToFileEmit: true,
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    port: 8081,
    contentBase: PUBLIC_DIR,
    publicPath: "/packs/",
    hot: true,
    compress: true,
    progress: true,
    overlay: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
}
