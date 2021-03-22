const path = require("path");
module.exports = (env, argv) => {
  return {
    entry: "./src/index.ts",
    target: "web",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "index.js",
      library: "error-result",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    resolve: {
      extensions: [".js", ".json", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
      ],
    },
  };
};
