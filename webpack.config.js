const path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/eventsource-polyfill.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'eventsource.js',
    libraryTarget: 'umd',
  }
}
