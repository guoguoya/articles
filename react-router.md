# react-router

### 4.1.1

感受到了满满的能量
声明式的可组合性（Declarative Composability）

不过这样的变动将会导致一个很严重的问题：由于路由定义里不再是纯粹的路由相关的组件，你无法在一个文件中（通常是用来定义路由的 routes.js）看到整个 App 的路由设计及分布。

<Router> 变身为容器,不再是路由了。但个人感觉还是兼容2的用法。

view:有点像通过url来change状态 Router 有点像一个状态管理容器