const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dir = (...bits) => path.resolve(__dirname, ...bits)

// Rules
const babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}

const css = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { modules: true } },
      'postcss-loader'
    ]
  })
}

// Plugins
const clean = new CleanWebpackPlugin(['dist'])

const extractText = new ExtractTextPlugin('app-[hash].css')

const html = new HtmlWebpackPlugin({
  template: 'src/index.html'
})

module.exports = {
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  entry: dir('src', 'index.jsx'),
  devtool: 'source-map',
  output: {
    filename: 'app-[hash].js',
    path: dir('dist')
  },
  module: {
    rules: [babel, css]
  },
  plugins: [clean, extractText, html]
}
