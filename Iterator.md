# Iterator

Iterator的作用有三个：

+   是为各种数据结构，提供一个统一的、简便的访问接口；
+   是使得数据结构的成员能够按某种次序排列；
+   是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。


Iterator的遍历过程是这样的。

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

```
    function Obj(value) {
      this.value = value;
      this.next = null;
    }

    Obj.prototype[Symbol.iterator] = function() {
      var iterator = {
        next: next
      };

      var current = this;

      function next() {
        if (current) {
          var value = current.value;
          current = current.next;
          return {
            done: false,
            value: value
          };
        } else {
          return {
            done: true
          };
        }
      }
      return iterator;
    }

    var one = new Obj(1);
    var two = new Obj(2);
    var three = new Obj(3);

    one.next = two;
    two.next = three;

    for (var i of one){
      console.log(i);
    }
    // 1
    // 2
    // 3
```


调用Iterator接口的场合
有一些场合会默认调用Iterator接口（即Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合。

（1）解构赋值

对数组和Set结构进行解构赋值时，会默认调用Symbol.iterator方法。

```

let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
// x='a'; y='b'

let [first, ...rest] = set;
// first='a'; rest=['b','c'];
```

（2）扩展运算符

扩展运算符（...）也会调用默认的iterator接口。

```
// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']
```

上面代码的扩展运算符内部就调用Iterator接口。

实际上，这提供了一种简便机制，可以将任何部署了Iterator接口的数据结构，转为数组。也就是说，只要某个数据结构部署了Iterator接口，就可以对它使用扩展运算符，将其转为数组。

```
let arr = [...iterable];
```

（3）yield*

yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

```
    let generator = function* () {
      yield 1;
      yield* [2,3,4];
      yield 5;
    };

    var iterator = generator();

    iterator.next() // { value: 1, done: false }
    iterator.next() // { value: 2, done: false }
    iterator.next() // { value: 3, done: false }
    iterator.next() // { value: 4, done: false }
    iterator.next() // { value: 5, done: false }
    iterator.next() // { value: undefined, done: true }

```

（4）其他场合

由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。

```
    for...of
    Array.from()
    Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
    Promise.all()
    Promise.race()
```
