#关于npm的一些操作

### 如何发布一个npm包

 1.注册一个npm的账号
 2.用cmd规范写模板
 3.npm login 登录账号
 4.npm publish 发布到npm 上

### 添加node命令行

1.先要保证node命令的路径要正确
下面是一个命令
npm root 查看你系统的全局的路径
npm config ls -l 查看npm 配置
npm link 请包添加到全局 node_modules
2. 在npm 包里添加 可执行脚本

```
    #!/usr/bin/env node  告诉系统用node执行脚本
    console.log('filesearch');
```

3. npm link 请包添加到全局 node_modules

npm dedupe 可以删除重复副本（这个问题我感觉辉）

### 如何管理你的npm 依赖
[npm依赖树构建](https://segmentfault.com/a/1190000007681042)


过长的依赖树会导致 require时的查询时间过长（依赖查找是层级递增的）

