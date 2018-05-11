# promise

>Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

### promise的特点

+ 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。
+ 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected

### 基本用法

>Promise新建后就会立即执行

```js
  let p = new Promise(function(resolve, reject) {
    console.log('start');
    if (true) {
      resolve('success');
    } else {
      reject('error');
    }
  });
  console.log('then');
  let t = p.then(function(val) {
    console.log(val)
  }, function(val) {
    console.log(val)
  }).catch(function() {

    });

```

### Promise.prototype.then

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。


```js
  let p = new Promise(function(resolve, reject) {
    let t = new Error('133');

    if (true) {
      resolve('success');
    } else {
      reject('error');
    }
  });

  var a = p.catch(function(val) {
    console.log(1)
  })
  var b = a.catch(function(val) {
    console.log(2);
  });

  var c = b.catch(function(err) {
    console.log(3);
  });

  var d = c.then(function(val) {
    console.log(4);
  });
  var e = d.then(function(val) {
    console.log(5);
  });
```

Promise状态转变时传入的参数会有一种冒泡的特性（当不是手动return时）。

```js
      let p = new Promise(function(resolve, reject) {
      let t = new Error('133');

        if (false) {
          resolve('success');
        } else {
          reject('error');
        }
      });

      var a = p.then(function(val) {
        console.log(val)
      })
      var b = a.catch(function(val) {
        console.log(val);
      });
```

### promise.prototype.catch

>需要注意的是，catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。


### Promise.resolve()

>有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。

```js
  var p = Promise.resolve();

  p.then(function () {
    // ...
  });
```

### Promise.reject()

```

```


