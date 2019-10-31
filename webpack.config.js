const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const c = require('./config');

const tsconfig = path.join(__dirname, 'tsconfig.json');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    '@babel/polyfill',
    path.join(__dirname, 'src/index.tsx'),
  ],
  node: {
    __dirname: true,
    __filename: true,
  },
  optimization: {
    minimize: true,
  },
  output: {
    publicPath: '/',
    filename: 'index.js',
    chunkFilename: `[id].js?v=${c.v}`,
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
    plugins: [
      new TSConfigPathsPlugin({
        baseUrl: 'src',
        configFile: tsconfig,
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: { compact: false },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: tsconfig,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[paths][name].[ext]',
          toType: 'dir'
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist/**'],
    }),
    new CopyPlugin([
      {
        from: 'src/index.html',
      },
    ]),
  ],
  devServer: {
    port: 9009,
    compress: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    stats: {
      assets: false,
      chunks: false,
    },
  },
};
