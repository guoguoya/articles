#gulp 源码剖析

## orchestrator 

是以 EventEmitter 为原型的类，且在构造函数内call Eventter 


### API
ary events 定义的事件
ary seq  序列化后的task
fn reset 重新初始化 orchestrator
fn add 添加事件
fn task 如果有该事件则返回否则添加该事件
fn hasTask 判断是否有该事件

fn start 将传入的参数（str, ary）扁平成一个数组
fn listenToEvent 为单个event添加回调
fn _resetAllTasks 为重置所用任务 
fn _resetTask 重置单个任务的执行属性
fn _resetSpecificTasks 重置特定的 task树
fn _runStep 按序执行task
fn _runTask 执行单个task
fn _stopTask 标记task 被执行完
fn _emitTaskDone 通知 task stop 事件
fn runtask  执行 task 的内容 同过task 的返回 一共3种形式 promise 、stream、 同步、
回调中用 _runStep 时很有道理的 相当于一个 
fn _readyToRunTask 扁平化的task是按照树的层级执行的上层的node dep 就行了
fn onAll 为所有event 添加回调
fn sequence 将依赖序列化
fn allDone 判断是否所有task 已经完成

## vinyl-fs

基于stream 处理 在pipe中中对文件处理可以构成链式

在cb 中可以处理 stream， promise，null 3中类型的返回值 
是一个处理文件输入输出，中间处理的内容。

### 

## through2

是一个用来封装transform的东西