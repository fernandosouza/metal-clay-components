const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/MetalClayButton.js',
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    // alias: {
    //     'metal-soy-bundle': path.resolve(__dirname, 'node_modules/metal-soy-bundle/'),
    //     'metal-incremental-dom': path.resolve(__dirname, 'node_modules/metal-incremental-dom/')
    // }
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                compact: false,
                presets: ['babel-preset-es2015'],
                plugins: ['babel-plugin-transform-node-env-inline']
            }
        }
    }]
  },
  output: {
      library: 'metal',
      libraryTarget: 'this',
      filename: './build/globals/button.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};