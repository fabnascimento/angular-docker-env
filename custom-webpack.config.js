const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        ENDPOINT: JSON.stringify(process.env.ENDPOINT)
      }
    })
  ]
};
