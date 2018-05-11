# es6

## class

>ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。


### 一般用法
```js
    //ES6
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      getPosition() {
        return `(${this.x},${this.y})`;
      }
    }

    //ES5 
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.getPosition = function() {
      return '('+ this.x + ','+ this.y +')';
    }
```

### constructor

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

### 不存在变量提升

```js
   new Foo(); // ReferenceError
   class Foo {}
```

### 私有方法

```js
  class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}
```

### Class的继承

```js
  class ColorPoint extends Point {
    constructor(x, y, color) {
      super(x, y); // 调用父类的constructor(x, y)
      this.color = color;
    }

    toString() {
      return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
  }
```

>ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。

### super 关键字

```js

  class A {}

  class B extends A {
    constructor() {
      super();
    }
  }
```

>作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
>在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。


>super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。


```js
  class A {
    speak() {
      console.log('a');
    }
  }

  class B extends A {
    constructor() {
      super();
    }

    speak() {
      super.speak();
    }
  }
```

>ES6 规定，通过super调用父类的方法时，super会绑定子类的this。

```js
  class A {
    constructor() {
      this.x = 1;
    }
    print() {
      console.log(this.x);
    }
  }

  class B extends A {
    constructor() {
      super();
      this.x = 2;
    }
    m() {
      super.print();
    }
  }

  let b = new B();
  b.m() // 2
```


## promise

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

Promise状态转变时传入的参数会有一种冒泡的特性。

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

## Module 的语法

>ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
>ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

### 基本介绍


>模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

### export 命令

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量

### import 命令

使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块

由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

### 模块的整体加载

除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

### export default 命令

本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。



### 课堂习题

1.创建两个对象A，B，对象结构如下
{
  name: 'xxx',
  score: 0,
  showScore: function() {
    console.log(this.score);
  }
}，每隔1秒（setInterval(function(){ //... });）A,B的score都会产生变化，score值为（Math.round((Math.random()*100))），用变量C保存score较大的对象，并输出该值。 

2.改造showScore 补充console的模板为 xxx 的分数是 xxx;

3.创建一个fn ShowScoreAlternately 每隔一段时间输出score;

