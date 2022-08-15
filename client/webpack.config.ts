import * as path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as dotenv from 'dotenv';
import { createEmotionPlugin } from 'emotion-ts-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';

dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';

const commonConfig: webpack.Configuration = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  entry: {
    app: './src/client',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: isDevelopment,
            getCustomTransformers: () => ({
              before: isDevelopment
                ? [
                    createEmotionPlugin({
                      sourcemap: true,
                      autoLabel: true,
                      labelFormat: '[local]',
                      autoInject: true,
                    }),
                  ]
                : [],
            }),
          },
        },
      },
      {
        test: /\.(jpe?g|gif|png|svg|ico)?$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: !isDevelopment,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? 'development' : 'production',
    }),
  ],
};

const developmentConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [new ReactRefreshWebpackPlugin(), new BundleAnalyzerPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/public',
    },
    historyApiFallback: true,
    compress: true,
  },
};

const productionConfig: webpack.Configuration = {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
  },
};

const config = (): webpack.Configuration => {
  if (isDevelopment) {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};

export default config;
