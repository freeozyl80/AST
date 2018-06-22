#AST

### 1.What is AST

AST means Abstract Syntac Tree(抽象语法树)。

_这里提供一个将源码直接生成图形语法树的链接_[在线code To AST](http://resources.jointjs.com/demos/javascript-ast)

### 2.Stage

* 抽象语法树阶段 1 => 分词
* 抽象语法树阶段 2 => 语义分析

### 3.分词&&语义分析

> 分词是将源码souce-code分割成语法单元，语义分析是在分词结果上分析这些语法单元之间的关系。

EG:  var a = 42 

​	<code>[ {type:'identifier',value:'var'},  {type:'whitespace',value:' '},      {type:'identifier',value:'a'},   {type:'whitespace',value:' '},  {type:'operator',value:'='},  {type:'whitespace',value:' '},   {type:'num',value:'42'},   {type:'sep',value:';'}]</code>

一些type的种类：

* Identifier: 变量名，函数名，属性名，都归为标识符
* Literal: 字面量
* function: 函数
* program: 整个语法树
* Statement（if, switch, debugger, with, return, break, continue）
  _常用种类_[常用种类](https://segmentfault.com/a/1190000007473065)

###4 AST IN ESlint
> ESLint的检查基于AST，除了这些内置规则外，ESLint为我们提供了API，使得我们可以利用源代码生成的AST，开发自定义插件和自定义规则。


###5 AST In Babel
> Babel的工作过程经过三个阶段，parse、transform、generate，具体来说，在parse阶段，使用babylon库将源代码转换为AST，在transform阶段，利用各种插件进行代码转换，如JSX transform将React JSX转换为plain object，在generator阶段，再利用代码生成工具，将AST转换成代码。

### 6 AST In webpack

> Webpack在打包流程中也需要AST的支持，它借助acorn库解析源码，生成AST，提取模块依赖关系
> **E:\mycode\share\AST\node_modules\webpack\lib\Parser.js**

----

关于treeshaking

_简洁js_[js splice](https://gist.github.com/kentcdodds/5a13a838cb2c915a2fbcd780c5c0de50#file-learning-code-md)