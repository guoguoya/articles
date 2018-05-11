IEEE 754 0.1 + 0.2 === 0.3 



## null 和 undefined 

null 指向空值

undefined 指没有值

null 是一个特殊关键字，不是标识符，然而undefined 是一个标识符。

```js
	undefined = 123123; // 并不报错
```

## void 运算符

void __ 没有返回值，因此返回结果是undefined

```js
	void 123 // return undefined
```

## Infinity 无穷数


## 0 与 -0 

正和负也是方向性。

## 引用复制/值复制

引用复制还是值复制是由值得类型来决定。

##


### 显示类型转换 和隐式类型转换

一元符号 +'123' => 123

### 位运算首先会 将数字 number 然后 toInt32 

类型转换时， 如+'123qwe' 不是parseInt般解析，而是number话

### 宽松相等和严格相等

== 允许在相等比较中进行强制类型转换，而 === 不允许

### 

(new Number(123)) === 123 // => false

### 宽松相等的情况下 null == undefined 而且null 和undefined 不会发生强制类型转换

### 在比较的时候 bool值都会转化成数值

### toNumber 会将空字符串转化成 0

### 因为根据规范a <= b被处理为b < a，然后将结果反转

{} <= {} // => true

### 运算符优先级

### 关联

： ？ 是右关联

var a = b = c = d = 1; 是有关联

### 函数参数

es6中参数被省略或者值为undefined，则取该参数的默认值

```js
	function test(a = 1, b = 2) {
		console.log(a, b);
	}

	test() // => 1 2 
	test(undefined, null) // => 1 null
```

### error

TypeError, ReferenceError, syntaxError

早期错误(编译时错误，无法被捕获)和运 行时错误(可以通过 try..catch 来捕获)

### continuation 延续

### 毁灭金字塔

### 人的大脑习惯于顺序地计划任务，所以对于人而言，比较难理解异步的代码。

### 异步的信任问题

#### 出现的应对方法

分离回调（也就是精确化结果）
error-first 风格

### Promise
Promise 一旦决议就不可再变

#### promise的局限性

外部无法处理promise的内部的错误，且错误处理可能不知道在链式调用的某个环节被处理掉。

只能传输单一值

单次决议

promise 无法取消

