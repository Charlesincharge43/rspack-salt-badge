// rspack.config.js
const path = require('path');
const {
    HtmlRspackPlugin,
  } = require('@rspack/core');
const rspack = require('@rspack/core')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
        type: 'javascript/auto'
      },
      {
        test: /\.module\.css$/i,
        use: [
            rspack.CssExtractRspackPlugin.loader,
            {
                loader: 'css-loader',
            }
        ]
      },
      {
        test: /^(?!.*.module\.css$).+\.css$/i,
        use: [
            rspack.CssExtractRspackPlugin.loader,
            {
                loader: 'css-loader',
            }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlRspackPlugin({
        template: './public/index.html',
    }),
    new rspack.CssExtractRspackPlugin({
        filename: '[name].css'
    }),
    new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        exposes: {
          './Button': './src/Button',
        },
        shared: {
          react: {
            singleton: true,
          },
          'react-dom': {
            singleton: true,
          },
          '@salt-ds/core': {
            singleton: true,
          }
        },
      })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
  },
};