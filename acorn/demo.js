var acorn = require("acorn")

var code = "let demo = 'This is Just Test'; let G = function() {}; G() // I love playing";
var ast = acorn.parse(code, {
	// ecmaVersion:7, //字面意义，很好理解，就是设置你要解析的 JavaScript 的 ECMA 版本。默认是 ES7
	// onComment:function(block, text, start, end) {   // 这里可以将注释搞定
	// 	console.log('是否是块注释', block);
	// 	console.log('注释的内容：', text);
	// 	console.log('注释的开始：', start, '注释的结尾：', end);
	// },
	// location: true,
	range: [0,100]
})
/*
* Q1: acorn自带 es6? es7
*/
console.log(JSON.stringify(ast));
// 输出结果
/*

Node {
  	type: 'Program',
  	start: 0,
  	end: 30,
  	body:   --> 数组，包括多个statement申明
    [ Node {
        type: 'VariableDeclaration',
        start: 0,
        end: 30,
        declarations: [ 
			Node {
		    	type: 'VariableDeclarator',
		    	start: 4,
		    	end: 30,
		    	id: Node { type: 'Identifier', start: 4, end: 8, name: 'demo' },
		    	init:
		     	Node {
		       		type: 'Literal',
		       		start: 11,
		       		end: 30,
		       		value: 'This is Just Test',
		       		raw: '\'This is Just Test\'' 
		       	} 
		    } 
		],
   		kind: 'var' } 
   	],
  	sourceType: 'script' }

*/