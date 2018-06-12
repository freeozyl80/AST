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