# jquery 阅读

### 基本使用方式

从dom中选中某一些元素进行操作。

### core

view: 这个看起来是不是像一个工厂
既然jQuery是一个工厂函数 那么内部不就需要一个构造函数了，那么这个构造函数放在哪里呢？

```js
    jQuery = function( selector, context ) {
        return new jQuery.fn.init( selector, context );
    }

    jQuery.fn = jquery.prototype = {};
```

如何直接 **new jQuery.fn.init( selector, context )** 那么创造出来的对象没法调用jQuery.prototype上的内容
为了能调用到jquery原型上的内容 

```js
    jQuery.fn.init.prototype = jQuery.fn
```

jQuery.extend() 这个函数是一个copy函数 存在一个特判，若target

```js
    jQuery.extend = jQuery.fn.extend = function(){

    };
```

链式调用

```js
  $('.hehe').find('.gege').addClass('is-active');
```

反模式

jQuery的每个api的职责不单一，导致内部实现复杂
```js
    
```


sizzle模块

```js
    sizzle模块在JQuery中扮演着非常重要的角色，它承担着用css的匹配形式选择dom元素的义务。
    这里简单介绍下css解析器，html经过解析生成DOM Tree，css解析完成后和DOM Tree的内容一起进行分析生成Render Tree，这个解析过程是从右往左的，
    
    view:在我现在的认知中，我这样解释这个行为，首先遍历是从根节点开始递归遍历，在回溯的时候处理当前这颗子树下能匹配的最优情况是什么，并保留相关需要记录的信息，如果是从上往下处理，大量的内存在递归时被开辟出来，无法销毁，所以从下往上传，减少内存开辟量。(我并没有看过浏览器解析引擎的代码)但从下往上匹配会出现这样一个问题，就是如果底部匹配的节点过多，每一次合并处理就会消耗大量的时间。所以这样这样，轻一点喷。
    上面的思考有问题，实际上搜索是从选中的最后一个点去判断的，我介绍的方法的复杂度o(n*m)n表示节点个数，m表示token数 而实际的方法的复杂度为o(k*l) k表示最后一个token匹配的个数，l表示平均长度。
```


词法分析

sizzle模块中通过tokenize方法处理token。

基本流程可以分解成四个部分。

1. 第一部分进行预处理，判断是否已经匹配过这个string，有则直接从cache里面取

```js
    var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ selector + " " ];

    if ( cached ) {
        return parseOnly ? 0 : cached.slice( 0 );
    }

    soFar = selector;
    groups = [];
    preFilters = Expr.preFilter;
```

2. 处理当前在首位的是否是用 **,**隔离开来的多个匹配

```js
    if ( !matched || (match = rcomma.exec( soFar )) ) {
        if ( match ) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice( match[0].length ) || soFar;
        }
        groups.push( (tokens = []) );
    }
```

3. 先处理这几个特殊的Token ： >, +, 空格, ~

```js
    if ( (match = rcombinators.exec( soFar )) ) {
        matched = match.shift();
        tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace( rtrim, " " )
        });
        soFar = soFar.slice( matched.length );
    }
```


4.匹配一些较为复杂的token

```
    for ( type in Expr.filter ) {

        if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
            (match = preFilters[ type ]( match ))) ) {
            matched = match.shift();
            //放入Token序列中
            tokens.push({
                value: matched,
                type: type,
                matches: match
            });
            soFar = soFar.slice( matched.length );
        }
    }
```

view:通过以上的代码，我学习到了exec的用法。在处理token中一步步匹配发生了奇效。

select 函数

从selector 取出最后一个token 当做起始点出发判断该点存不存在。

//


>此外，API的粒度也是一个课题。粒度越大的API往往功能越强，可以通过少量的调用完成大量工作，但粒度大往往意味着难以复用。越细粒度的API灵活度往往越高，可以通过有限的API组合出足够的灵活性，但组合是需要付出“表现力”作为成本的。JavaScript在表现力方面有一些硬伤，即所谓“语法噪音”，例如定义函数所用的function关键字和大括号，函数返回值必须使用的return关键字等等，其实都限制JavaScript在某些场景下的表达能力，例如在CoffeeScript中的匿名函数(x) -> x + 1，使用JavaScript就必须写为function (x) { return x + 1; }。我们的确可以在JavaScript中设计出一套足够灵活，可以组合出各种流程的异步API，我也做过这方面的尝试，但最终会发现，这样设计出来的API始终无法清晰地表达出流程的真正意图。

matcherFromTokens 返回一组tokens的匹配方法组

addCombinator 处理的relative的关系

```js
    function addCombinator( matcher, combinator, base ) {
        // ...
        // 当 combinator.first是存在时 只找最近的一个祖先，否则不断地往root查找
        // 
        // 
        // 这里的matcher是一个当前的matcher组
        // 
    }
```

elementMatcher 组合一组matcher

