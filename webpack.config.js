const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: './src/index.js',
    devtool: 'eval-cheap-source-map',
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      open: false,
      port: 3050
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
             presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/template/index.html'
      })
    ]
};
