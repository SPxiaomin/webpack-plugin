const path = require('path');
const TestPlugin = require('./plugins/test-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  plugins: [
    new TestPlugin({
      name: 'test plugin',
    }),
  ],
};