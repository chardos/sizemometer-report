const entry = `${__dirname}/src/index.js`;
const outputPath = `${__dirname}/dist`;

// run a node command that generates the assets randomly before hand

module.exports = {
  devServer: {
    // contentBase: `${__dirname}/assets2`,
    port: 8080
  },
  entry,
  output: {
    path: outputPath,
    publicPath: '/assets', // webpack-dev-server outputs from here
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
