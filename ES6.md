#ES6

### let and const 

>块级作用域

>for循环中循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域

```js
        
    for (let l = 1, temp = 0; l <= 10; l++) {
        temp ++ ; 
        console.log(temp);
        let l = '111';

        console.log(l);//111
    }

    let a = 1 ; 
    let a = 1 ;//JavaScript不能反复声明一个变量
```


>“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。


>浏览器没有遵循ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
>考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

```js
    function findDom() {

    }

    {
        let findDom = function() {

        }
    }
```

>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动

>浏览器和 Web Worker 里面，self也指向顶层对象，但是Node没有self。

### 变量的解构赋值


**数组的解构**

>事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

```js
    function* stepUp() {
        let a = 0;
        while (true) {
            yield ++a ; 
        }   
    }
    let [one, two, three] = stepUp();
```

**对象的解构**

对象的解构也存在嵌套结构的赋值。(也就是除了结构导引)

```js
    let nav = {
        cur: 'cur',
        children: ['sec', 'thi', 'fou']
    };

    let { cur: current, children: [second, third, fouth ]} = nav;
```

**变量的解构用途**

1.交换变量
```
    let x = 1;
    let y = 2;  
    [x, y] = [y, x];
```

2.从函数返回变量
```
```

3.函数参数的定义(解构赋值可以方便地将一组参数与变量名对应起来)

4.提取JSON数据

5.函数参数的默认值

6.遍历map结构

7.输入模块的指定方法

### 字符串的扩展

```
    "\u0061"
    // "a"
```

但是，这种表示法只限于\u0000——\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。

JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。

模板字符串
```
   `In JavaScript '\n' is a line-feed. ${ 1 + 2}` 
```

>大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。

### 正则的扩展

```
    var regex = new RegExp(/xyz/i);
    // 等价于
    var regex = /xyz/i;
```

*字符串的正则方法**

- String.prototype.match 调用 RegExp.prototype[Symbol.match](i 区分大小写，g全局匹配)
- String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
- String.prototype.search 调用 RegExp.prototype[Symbol.search]
- String.prototype.split 调用 RegExp.prototype[Symbol.split]
*
点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。


```
    匹配任何一个字符
    
    function codePointLength(text) {
      var result = text.match(/[\s\S]/gu);
      return result ? result.length : 0;
    }

    var s = '𠮷𠮷';

    s.length // 4
    codePointLength(s) // 2
```

**正则的匹配**

exec

```
    var str = "Visit W3School, W3School is a place to study web technology."; 
    var patt = new RegExp(/W(\d+)School/g);'sdfaaaaaaaa14aaaaaaaaaa'
    var t = patt.exec(str);
    // t = ["W3School", "3"]
    // t.input = 'Visit W3School, W3School is a place to study web technology.';
    // t.index = 6
    // patt.lastIndex = 14;
    // 假设这里又重新开始匹配另一个字符串，那么也是从lastIndex开始
```

test

```
    // ES5的source属性
    // 返回正则表达式的正文
    /abc/ig.source
    // "abc"

    // ES6的flags属性
    // 返回正则表达式的修饰符
    /abc/ig.flags
    // 'gi'
```




### 数值的扩展
NaN infinite 
Number.EPSILON 这是一个非常小的常量
>JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

1 11 52

//作为参考
浮点数范围：

as  large  as ±1.7976931348623157 × 10的308次方
as small as ±5 × 10的−324次方
精确整数范围：

The JavaScript number format allows you to exactly represent all integers between
−9007199254740992  and 9007199254740992 （即正负2的53次方）
数组索引还有位操作：

正负2的31次方

### 数组的扩展

扩展运算符（...）也可以将某些数据结构转为数组

扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。

### 对象的扩展

>解构赋值的拷贝是浅拷贝。

>类似数组的对象，本质特征只有一点，即必须有length属性。

### 函数的扩展

**默认参数**

```
    function Point(x = 0, y = 0) {
        console.log(x, y);
    }
```

>首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。

**与解构赋值默认值结合**

```
    function foo({x, y =5}) {
        console.log(x, y);
    }

    foo({});
```


>通常情况下，定义了默认值的参数，应该是函数的尾参数。

>length属性的含义是，该函数预期传入的参数个数。

>如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

>一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

**rest参数**

>ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。

>rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。


```
    function toAry(...args) {
        return args;
    }

```


**扩展运算符**

>扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。


```
    console.log(...[1, 2, 3]);
    // = console.log(1, 2, 3);
    //1 2 3 
```

```
    'x\uD83D\uDE80y'.length // 4
    [...'x\uD83D\uDE80y'].length // 3
```

>上面代码的第一种写法，JavaScript会将32位Unicode字符，识别为2个字符，采用扩展运算符就没有这个问题。因此，正确返回字符串长度的函数，可以像下面这样写。

任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
```
    var nodeList = document.querySelectorAll('div');
    var array = [...nodeList];
```


```
    var res = /^function\s([a-zA-Z0-9_]+)(\s+)\(/g.exec('function hehe(){}');
    let fnName = fn => fn.name ? fn.name : /^function\s([a-zA-Z0-9_]+)(\s+)\(/g.exec(fn.valueof());

```

注意一点

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。


