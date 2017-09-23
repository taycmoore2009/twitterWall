const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './main.js',
   './main.less'
 ],
 output: {
   path: path.join(__dirname, 'www'),
   filename: 'bundle.js',
 },
 module: {
   rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    },
    {
      test: /\.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader" // compiles Less to CSS
      }]
    }
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};