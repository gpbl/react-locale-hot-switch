module.exports = {
  entry: {
    main: './client.js'
  },

  output: {
    path: './public/js',
    publicPath: '/js/',
    filename: '[name].js'
  },
  
  resolve: { extensions: ['', '.js'] },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx?harmony'] }
    ]
  },
  devtool: 'source-map'
};