// const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/app.js',
//   output: {
//     filename: 'app.js',
//     path: path.resolve(__dirname, 'assets', 'scripts'),
//     publicPath: 'assets/scripts/'
//   },
//   devtool: 'cheap-module-eval-source-map',
//   // devServer: {
//   //   contentBase: './'
//   // }
//   plugins: [
//     new CleanPlugin.CleanWebpackPlugin()
//   ]
// };

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'SharePlace': './src/SharePlace.js',
    'MyPlace': './src/MyPlace.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      filename: 'index.html',
      template: 'dist/index.html',
      template: 'dist/my-place/index.html'
    })
  ],
  watch: true,
  devtool: 'source-map'
};