#ES7 相关用法

###decorator

>修饰器本质上就是能在编译时执行的函数。

class类修饰

修饰器函数接收参数
1.目标函数


```js
    function test(target) {
      target.test = false ;
    }

    @test 
    class name {
      constructor(x) {
        this.x = x; 
      }
    }
```

类属性修饰

修饰器函数接收参数
1.修饰的目标对象（fn.prototype）
2.修饰的属性名
3.该属性的描述对象


```js
    function test(target, name, descriptor) {
      console.log(target, name , descriptor);
      target.test = false ;
    }

    class Person {

      @test age = 1 ;

      constructor(x) {
        this.x = x; 
      }

      @test
      add() {
        console.log('add');
      }
    }
```

### 注

多个修饰可以同时作用在一个属性或者类上，按从下至上的执行顺序。

###await async
给个实例就好了 感觉这在底层应该是个挂起操作。

