# you don't know 

###

传统编译中 的步骤 词法分析


# this 

1.默认绑定 在非严格模式下绑定全局对象 严格模式下 绑定undefined

2.隐式绑定 上下文调用绑定

3.显示绑定

4.new 


bind 可以做科里化操作，绑定默认参数

call 和 apply 的第一个参数是null，或者是undefined时，会使用默认绑定

硬绑定 是在函数内部调用apply或者call实现
软绑定 其实就是判断this 是否指向undefined和window外的对象
Object.create(null) 会创建一个每有原型的对象

