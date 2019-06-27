const entry = `${__dirname}/index.js`;
const outputPath = `${__dirname}/dist`;

module.exports = {
  // mode: 'development',
  entry,
  output: {
    path: outputPath,
    publicPath: '/', // webpack-dev-server outputs from here
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
