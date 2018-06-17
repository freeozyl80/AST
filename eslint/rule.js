module.exports = {
    create: function (context) {
        return {
        	Identifier: function(node) {},
            CallExpression: function (node) {
            	console.log(node.callee.name)
                // 如果函数名为alert，则报错
                if (node.callee.name === 'alert') { //calle.object.name  -----------  properity.name
                    context.report({
                        node: node,
                        message: 'Wrong using alert'
                    });
                }
                if (node.callee.name === 'jaffezhang') {
                    context.report({
                        node: node,
                        message: 'jaffezhang is keyword'
                    });
                }
            }
        };
    }
};
// npm install -g yo
// npm install -g generator-eslint