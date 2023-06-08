module.exports = {
  // Existing Webpack configuration
  // ...

  module: {
    rules: [
      // Existing rules
      // ...

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Other configuration options
  // ...
};
