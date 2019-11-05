const HtmlWebPackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { config } = require('dotenv');

config();


module.exports = () => {
  const env = config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new DefinePlugin(envKeys)
    ],
    devServer: {
      historyApiFallback: true,
    },
    node: {
      fs: 'empty'
    }
  };
};
