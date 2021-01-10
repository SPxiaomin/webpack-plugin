# webpack-plugin

## 插件的基本结构

```js
class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('My Plugin', (stats) => {
      console.log('Hello World!');
    });
  }
}

module.exports = MyPlugin;
```

## 插件的使用

```js
plugins: [new MyPlugin()]
```

## 插件参数获取

```js
module.exports = class MyPlugin {
  constructor(options) {
    this.options = options;
  }

  apply() {
    console.log('apply', this.options);
  }
};
```

## 插件的错误处理

参数校验阶段可以直接 throw 的方式抛出

```js
throw new Error('Error Message')
```

通过 compilation 对象的 warnings 和 errors 接收

```js
compilation.warnings.push('warning')
compilation.errors.push('errors')
```

## 文件写入

通过 compilation 进行文件写入.

## 插件扩展: 编写插件的插件
