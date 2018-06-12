var acorn = require("acorn")

var code = "var demo = 'This is Just Test'";
var ast = acorn.parse(code, {})

console.log(ast);