#vue


### 简单介绍

vue简单而言是一个 核心关注于view层的组件化框架。 
vue是MVVM分层架构应运而生的产物。(这个应该只是前端的架构对后端而言只是view层的视图层和控制层)
v 视图层
mv 视图模型
M 前端的M 指后端的 M C（通过restfulAPI连接）

在view -> vm 是通过事件绑定传递数据。 
在 vm -> view是通过getter setter模型传递数据。
这样就实现了 v 和mv 的双向绑定。 

从大体上看 vue 是在语法上是命令式 ，通过template 实现组件化（这里还需要具体了解）。
在template的编写上采用Web Components的形式(自定义组件)。

>现在你只需知道所有的 Vue.js 组件其实都是被扩展的 Vue 实例
>除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分

### 实例的方法 和属性 []()

### 实例的生命周期


### $on $emit

只是触发和接收当前的实例上的事件。

### slot-scope

作用域插槽

定义了子组件所能接收的数据

场景：既可以复用子组件的slot，又可以使slot内容不一致。

### slot 中的ref 属于调用的组件


### 生命周期

beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeActivated
activated
beforeDestroy
destroyed


