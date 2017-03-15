import * as path from 'path';
import * as webpack from 'webpack';
const angularExternals = require('webpack-angular-externals');
const rxjsExternals = require('webpack-rxjs-externals');
const pkg = require('./package.json');

export default {
  entry: {
    'angular-msms-utils.umd': path.join(__dirname, 'src', 'index.ts'),
    'angular-msms-utils.umd.min': path.join(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist', 'bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'angularMsmsUtils'
  },
  externals: [
    angularExternals(),
    rxjsExternals()
  ],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'tslint-loader?emitErrors=true&failOnHint=true',
      exclude: /node_modules/,
      enforce: 'pre'
    }, {
      test: /\.ts$/,
      loader: ['awesome-typescript-loader', 'angular2-template-loader'],
      exclude: /node_modules/
    },
      /* Embed files. */
      {
        test: /\.(html)$/,
        loader: 'raw-loader',
        // exclude: /\.async\.(html|css)$/
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname, 'src')
    ),
    new webpack.BannerPlugin({
      banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */
      `.trim(),
      raw: true,
      entryOnly: true
    })
  ]
};
