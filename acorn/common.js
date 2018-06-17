var acorn = require("acorn")
// 遍历所有节点的函数
function walkNode(node, callback) {
  callback(node)

  // 有 type 字段的我们认为是一个节点
  Object.keys(node).forEach((key) => {
    const item = node[key]
    if (Array.isArray(item)) {
      item.forEach((sub) => {
        sub.type && walkNode(sub, callback)
      })
    }

    item && item.type && walkNode(item, callback)
  })
}
 
function parseDependencies(str) {
  const ast = acorn.parse(str, { ranges: true })
  const resource = [] // 依赖列表
  console.log(JSON.stringify(ast));
  // 从根节点开始
  walkNode(ast, (node) => {
    console.log('callee',node.callee);
    console.log('arguments',node.arguments);
    const callee = node.callee
    const args = node.arguments

    // require 我们认为是一个函数调用，并且函数名为 require，参数只有一个，且必须是字面量
    if (
      node.type === 'CallExpression' &&
      callee.type === 'Identifier' &&
      callee.name === 'require' &&
      args.length === 1 &&
      args[0].type === 'Literal'
    ) {
      const args = node.arguments

      // 获取依赖的相关信息
      resource.push({
        string: str.substring(node.range[0], node.range[1]),
        path: args[0].value,
        start: node.range[0],
        end: node.range[1]
      })
    }
  })
}
  parseDependencies("var r = require('path')")

  // require属于callee
  // path属于arguments