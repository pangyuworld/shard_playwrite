const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      mode: 'development',
      entry: './src/index.jsx',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-react', { runtime: 'automatic' }],
                  '@babel/preset-env'
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
        allowedHosts: ['all', '.alibaba-inc.com']
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          inject: 'body'
        })
      ]
    };
