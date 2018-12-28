module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: 'eval-cheap-module-source-map',
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
