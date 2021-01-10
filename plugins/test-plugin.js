module.exports = class TestPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log('My plugin is executed!');
    console.log('My plugin options ', this.options);
  }
};
