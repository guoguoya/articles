#less系统学习

##总体内容
1.  variiable 变量
2.  mixins 混合
3.  nested 嵌套
4.  operations 表达式
5.  function 方法
6.  。。。


###variable 变量

Variable Interpolation 变量插值 

常见的应用场景:

+ 在选择器中插值
+ 在属性名中插值
+ 在url中插值
+ import中插值

代码块：

    .top-banner-@{name} {
        @{bottom}: 100px;
        height: @@string-value;
        margin-bottom: 100px;
        color: @color-dark;
        background-image: url('./@{image}/image_1.png');
    }

lazy Loadding 
    你可以认为是变量赋值是在最后执行的，且满足就近原则，同一个scope后定义的优先级大。

    //variables.less    
    @color-base: #333333;
    @color-dark: @color-base + #111111;
    //main.less
    @color-base: #555555;
    @color-base: #666666;
    .top-banner-heheda {
        color: @color-dark;
    }
    //main.css 
    .top-banner-heheda {
        color: #777777;
    }

  不建议页面中定义变量。很有可能导致变量污染。



###mixins 混合 

常见的应用场景：

+  做兼容的时候使用 
+  提取一些公关的方法（一般是最小参数集合。一般是在一种场景下能用到的）
+  需要传参数的时候使用 
+  构造一系列有序的class时采用loop方式构造，一般公共部分不会采取mixins的方式而是选择一个基类）

代码块：

    .opacity(@opacity) {
      opacity: @opacity;
      // IE8 filter
      @opacity-ie: (@opacity * 100);
      filter: ~"alpha(opacity=@{opacity-ie})";
    }
    .col-sm-make(@n,@i:1) when( @n >= @i ){
      .col-sm-@{n} {
        height: @i * 1px;
        
      }
      .col-sm-make((@n - 1));
    }

mixins

namespace 命名空间 有时为了避变量污染，可以使用 命名空间的方式 定义和使用mixins
在mixins 后面 + !important 则所有属性值后都会被加上。

mixins 可以带参数 同时也可以带默认参数。

@arguments 在参数中表示 所有参数


Named Parameters 可以指定参数 比如 .mixin(@color:red);

Pattern-matching 可以通过参数控制选择的mixin 


    .mixin(dark; @color) {
      color: darken(@color, 10%);
    }
    当第一个参数为 dark 时才会被调用。

loop 循环建立一个有序的class组

    
    .text-merge {
        @class-type: ~" .meimeida , .heheda, .guoguoda" ;
        @class-mul: @class-type ~", .mulda";
        & @{class-mul} {
        height: 1px;
        }
    }
    .make-animation(@type, @num) when(@num > 0){
      @name :  ~'@{type}-@{num}';
      @keyframes @name{
        from {
          top: 10px;
        }
        to {
          top: 20px;
        }
      }
      .make-animation(@type, @num - 1);
    }
    .make-animation( scroll ,3);

尚需完善   
  passing rulesets to Mixins  
  Extend 

### 一些自我的思考

less其实是个编译器，其实是在用js实现less 语法向css转化。
~ 这个我猜内部就是个eval的方法。