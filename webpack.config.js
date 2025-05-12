const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.scss', '.css'],
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|bmp|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/videos/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/assets',
        to: 'assets',
        noErrorOnMissing: true
      }],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  stats: {
    warningsFilter: [
      /Deprecation Warning/,
      /Global built-in functions/
    ]
  }
}