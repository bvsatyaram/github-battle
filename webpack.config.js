var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'public/assets');

var imageLoaderOptions = {
  mozjpeg: {
    quality: 65
  },
  pngquant:{
    quality: "65-90",
    speed: 4
  },
  svgo:{
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeEmptyAttrs: false
      }
    ]
  },
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false
  },
  optipng: {
    optimizationLevel: 7,
    interlaced: false
  }
}

var fileLoaderOptions = {
  hash: 'sha512',
  digest: 'hex',
  name: '[hash].[ext]'
}

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOptions
          },
          {
            loader: 'image-webpack-loader',
            options: imageLoaderOptions
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
