#mobx

[doc](https://mobx.js.org/intro/overview.html)

### keyword

accessed 进入的时候
stale 过期
batch 一批 
track 跟踪
observed 观察
Derived 衍生
detect 查看
dispose 处理(这里是删除的概念)
enhancer 加强 这个方法将生产observable
propagate 传播
scope 上下文的意思（参数用到的时候）
Interceptors 拦截器
dependency 从属，依赖
I 开头应该是初始化对象的
spy 是一个全局的事件监听器

### 一些基本总结

@observable


@computed

@observer

Autorun creates a reaction that runs once, and after that automatically re-runs whenever any observable data that was used inside the function changes

1.Use the @observable decorator or observable(object or array) functions to make objects trackable for MobX.

2.The @computed decorator can be used to create functions that can automatically derive their value from the state.

3.Use autorun to automatically run functions that depend on some observable state. This is useful for logging, making network requests, etc.

4.Use the @observer decorator from the mobx-react package to make your React components truly reactive. They will update automatically and efficiently. Even when used in large complex applications with large amounts of data.


## 源码阅读
 这里我可能会写比较详细，因为笨啊。

### core

**globalstate.js**

存储全局状态

fn registerGlobals noop
fn getGlobalState 返回全局状态  
fn shareGlobalState 共享同一版本的全局属性
fn resetGlobalState 重置全局属性

**spy.js** （是个观察者模式）
>Registers a global spy listener that listens to all events that happen in MobX

fn isSpyEnabled 判断全局存在spy
fn spy  在全局属性中注册一个spy并返回一个方法，可以一个注销spy的方法。 
fn spyReport 用来通知所有的观察者
fn spyReportStart 用来通知所有观察者这是一个spyReportStart类型的消息
fn spyReportEnd   用来通知所有观测者这是一个spyReportEnd类型的消息

**action.js** 
action.js 在mobx准确而言是一个什么角色 。我目前没观察出action是处理什么的

fn createAction 包装fn成一个action 
fn executeAction  触发action
fn startAction 1.通知所有spy type:'action' 2.设置当前状态gobal state Derivation等
fn endAction action结束重置会原来的状态
?（上面过程中涉及的batch还不知道是干啥的）
fn useStrict 设置global strictMode 控制state是否能被修改
fn isStrictModeEnabled 返回 global strictMode的值
fn allowStateChanges 设施global allowStateChanges 为true 并执行fn，然后还原成原来的状态
fn allowStateChangesStart 设置当前global allowStateChanges 
fn allowStateChangesEnd  重置当前的golbal

**derivation.js**
state this.derivation 保存真实的fn 计算属性
state unboundDepsCount newObserving 的数量
fn untrackedStart 取出global trackingDerivation 并设置成null
untrackedEnd  放回 global trackingDerivation
state NOT_TRACKING
state UP_TO_DATE
state POSSIBLY_STALE 
state STALE 

fn queueForUnobservation 将其移入global
fn shouldCompute 判断derivation是否需要从新计算。
fn clearObserving 删除 
fn untrackedStart 取出global trackderivation
fn untrackedend 放回原global trackderivation
? fn untracked 
fn isComputingDerivation 判断是否正在计算derivation
fn checkIfStateModificationsAreAllowed 判断statechange是否被允许
fn trackDerivedFunction 执行derivation 并进行监控
fn bindDependencies 用新的newObserving 替换observing

**observable.js**
fn startBatch 只是统计batch的数量

**atom.js**

? fn BaseAtom 
? fn atom  

**observable.js**

fn hasObservers 判断observable 是否有observers
fn getObservers 返回当前observable的observers
fn invariantObservers 提示错误 0 位置不能有observers 且derivation的__mapid 对应的map的值指向observer数组中的pos
fn propagateChanged 当atom值改变时触发
fn propagateChangeConfirmed 当computedValue重新计算且值改变时触发
fn propagaeMaybeChanged computed 当dependency changed 不立即触发 
（上面3个方法是改变Observer属性）

? fn reportObserved 这个东西的具体作用不懂啊 表面上是给observable添加当前global上的trackingDerivation

**reaction.js**
state isDisposed 标记reaction是否被处理掉，true的化不会被调用
fn onBecomeStale 调用schedule
fn isScheduled 判断schedule状态
fn schedule  将其加入pendingReactions 中 并执行runReactions ;
fn runReactions 执行pendingReactions中的内容
fn runReactionsHelper 真正循环判断的执行的reaction的方法
fn setReactionScheduler 重新设置  reactionScheduler
fn onInvalidate 运行用track包装过的fn（这个是autorun传入的fn）
fn dispose 将reaction处理掉 在autorun中return出去
fn toString 重置tostring
? fn whyrun 不知道干嘛的 

**computedvalue.js**
fn onBecomeStale 调用 propagateMaybeChanged
fn onBecomeUnobserved 计算属性不在观察任何值
fn get 获取当前计算属性的值
? fn peek
fn set 设置当前计算属性的值
fn trackAndCompute 观察并计算
fn computeValue 返回recomputed的值
fn trackDerivedFunction 观察衍生的fn
fn observe 监听当前的computedvalue变化执行当前的回调listener 
### untils

**utils.js**

fn getGlobal 返回全局对象global
fn getNextID 返回全局id
fn fail  抛出异常信息（check: false）
fn invariant  判断后抛出异常信息
fn deprecated 输出错误信息并过滤曾经重复错误。
fn once 包装函数，使得其只允许被执行一次。
fn noop 空函数
fn unque 去除重复项
fn joinStrings 显示前limit的字符串。
fn isObject 判断是否是对象
fn isPlainObject 判断是否是空对象
fn objectAssign object合并

fn hasOwnProperty 判断object是否有自身属性
fn addHiddenProp  对object中的一个属性修改成不可枚举的属性
fn makeNonEnumerable 对object 中的一组属性修改成不可枚举的属性
fn addHiddenFinalProp 对object 中一个执行修改成不可枚举可修改的属性
fn isPropertyConfigurable 判断对象中的一个属性是否可配置
fn assertPropertyConfigurable 如果对象的属性不能配置则抛出对应的异常
fn getEnumerableKeys 获取对象可枚举的自身属性
fn isArrayLike 判断是否是可观察的数组
fn isMapLike   判断是否是可观察的Map
fn isES6Map    判断是否是Map
fn toPrimitive 返回值得原始类型
fn deepEqual 判断是否完全相同
fn primitiveSymbol 若有则返回Symbol的primitive
? fn createInstanceofPredicate  返回一个fn 但这个东西具体是什么呢 
（意思是创建在原型上创建一个关键词标识这个是否特定的类）

interface Lambda 接口

**iterable.js**

iteratorSymbol 若有这返回Symbol的iterator

arrayAsIterator 为ary 添加next 方法也就是迭代器
declareIterator 在对象的原型上添加迭代器的方法 [相关介绍](http://blog.csdn.net/kittyjie/article/details/50466471)

**decorators.js**

fn quacksLikeADecorator 判断参数个数2或3且第二个参数是string
? fn runLazyInitializers （__mobxLazyInitializers， __mobxDidRunLazyInitializers）可能是mobx初始化

? fn typescriptInitializeProperty 初始化property
fn  createClassPropertyDecorator 对创建property的一次包装 (runLazyInitializers)

### api

**action.js** 具体看不懂啊，但基本上是创建一个action，返回一个action或者一个descriptor
? fn actionFieldDecorator 在action中调用
? fn boundActionDecorator 在action.bound调用
? fn boundAction 
? fn action 用来创建action
  isAction 判断一个fn 是否是一个action

**extendobservable.js**

fn extendObservable
fn extendShallowObservable
fn extendObservableHelper

**autorun.js**


fn autorun 这个函数是用来创建reaction
fn when 这个函数包装了autorun 且当条件满足的时候执行一次，然后被dispose
fn autorunAsync 用setTimeout 异步化;

**computed.js**
fn computed 计算
fn createComputedDecorator


**createTransformer.js**（暂缓研究）

**expr.js** 

fn expr 这个方法有待商榷


**extendObservable.js**

fn extendObservable 添加observable属性
fn extendObservableHelper 这个是具体的操作

**extra.js**

fn getDependencyTree  入口方法
fn nodeToDependencyTree 

fn getObserverTree  入口方法
fn nodeToObserverTree

**intercept.js**

fn intercept 添加intercept 

**iscomputed.js**

fn isComputed 判断这个是不是iscomputed

**isobservable.js**

fn isObservable 判断这个是不是observable

**observable.js**

fn createObservable 创建 observable

**observabledecorator.js**

fn createDecoratorForEnhancer 为observable 创建decorator

**observeObservable.js**

fn  observe 添加观察

fn observeObservable 

**tojs** 

fn tojs 将observable 对象的转化成js结构

**transaction.js** （暂不）

**whyrun.js** （暂不）

### types 

**modifiers.js**

是用来限制observable
fn isModifierDescriptor 判断是否是一个mobx的修饰descriptor
fn createModifierDescriptor 创建一个mobx的修饰descriptor

**intercept-utils.js**

hasInterceptors 判断对象是否有拦截器回调
registerInterceptor 注册一个拦截器回调，并返回一个方法，可以注销这个拦截器的方法。
interceptChange 调用对象上的intercepts fn 
**listen-utils.js**

hasListeners 判断对象是否有listener（）
registerListener 向对象添加年间提起 并返回一个方法，可以注销这个listener
notifyListeners 调用对象上的listeners fn

**modifiers-old.js**
fn asReference
fn asStructure
fn asFlat
fn asMap
(上面一些方法是对observable的不同观察程度的限定)

**modifiers.js**
fn isModifierDescriptor 
fn createModifierDescriptor 创建
fn deepEnhancer deep 观测
fn shallowEnhancer 浅观测
? fn referenceEnhancer 直接返回值 

**observableobject.js** (是个双向绑定的 this = this.$mobx.target )($mobx 中存在changeListeners 和interceptors 属性)


fn isObservableObject 判断对象是否是一个observableobject
fn ObservableObjectAdministration new一个observableobject
fn observe 监听该对象
fn intercept 拦截该对象 
fn defineObservablePropertyFromDescriptor 字面意思

fn asObservableObject 如果是一个observableobject 则返回$mobx 否则在创建一个obserobject挂在$mobx 返回$mobx

**type-utils.js** 主要对一系列不同类型的元素返回该元素对应的内容

fn getAtom 返回atom 这个atom定义是什么呢? 不同类型的atom是不一样的。
fn getAdministration 
fn getDebugName 返回name

### 相关内容分析

#### 从文档的角度

derivation
reaction 通过autorun 创建的对象，通常是一些基本的task
computedvalue 这是个计算属性，他们updated lazily 


#### 从源码的角度

### 参考

[mobx-intro](https://blog.pixelingene.com/2016/10/effective-mobx-patterns-part-1/)

### record
目前阶段是在清各个函数的功能或者说是单个模板的功能

不记录对error的处理，一些次要的处理比如toString，toJSON， valueOf不做记录

utils 下的已清

core 下的 action spy globalstate atom derivation observable已清

computedValue 的属性value值保存的是计算后的值。

reportObserved 这个方法将添加newObserving
endBatch 这个方法里面在inBatch == 0 时触发reactions 触发机器

autorun 里面并不会去计算值 所以请将计算值和数据结构的搭建放在derivation