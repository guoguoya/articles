#reflect

>Refect对象是ES6为了操作对象而提供的新API。

##设计目的

1. Object对象的一些明显属于语言内部的方法放到Refect对象上。（eg.Object.defineProperty）
2. 修改某些Object犯法的返回结果，让其变得更加合理。
3. 让Object操作都变成函数行为。某些Object操作是命令式。提供函数行为。
4. *Reflect*对象的方法与 *Proxy* 对象的方法一一对应。

##对外暴露的api

+   Reflect.apply(target,thisArg,args)
+   Reflect.construct(target,args)
+   Reflect.get(target,name,receiver)
+   Reflect.set(target,name,value,receiver)
+   Reflect.defineProperty(target,name,desc)
+   Reflect.deleteProperty(target,name)
+   Reflect.has(target,name)
+   Reflect.ownKeys(target)
+   Reflect.isExtensible(target)
+   Reflect.preventExtensions(target)
+   Reflect.getOwnPropertyDescriptor(target, name)
+   Reflect.getPrototypeOf(target)
+   Reflect.setPrototypeOf(target, prototype)


Reflect.get(target, name, receiver)

```

```



