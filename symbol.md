#symbol

>为了保证在为一个对象添加属性时不会与现有的属性相冲突。

Symbol值通过Symbol函数生成

```js
	let sym = Symbol();

```

注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

```js
	var c = Symbol('hehe');
	var c1 = Symbol('hehe');
	c === c1 // false
```

symbol作为属性名的应用场景
```js
	let sym = Symbol();
	
	let obj = {
		[sym] : '123'

	};

	let obj1;
	obj1[sym] = 123;

	let obj2; 

	Object.defineProperty(obj2, sym, {
		configurable: true,
		enumerable: true,
		writable: true,
		value: 1
		});
```



Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。