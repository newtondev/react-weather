module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },  
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: ['babel-loader']      
    }]
  }
};
