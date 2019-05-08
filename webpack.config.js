const path = require('path');

module.exports = {
  entry: './build/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: path.resolve('./node_modules/react'),
    }
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build/'),
    publicPath: '/',
  },
};
