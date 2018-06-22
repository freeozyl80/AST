const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;

const code = `function square(n) {
    return n * n;
}`

const ast = babylon.parse(code);
console.log(ast);
traverse(ast, {
  enter(path) {
    if (path.node.type === 'Identifier' && path.node.name === 'n') {
      path.node.name = 'x'
    }
  }
})
var res = generate(ast, {}, code)

console.log(res)