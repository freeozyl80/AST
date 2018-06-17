const rule = require('./rule');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

ruleTester.run("custom-plugin-rule", rule, {
    valid: [
        "fun('我这里只是想console.log出来一个数据而已')",
    ],

    invalid: [
        {
            code: "alert('wrong')",
            errors: [ { message: "Wrong using alert" } ]
        },
        {
            code: "jaffezhang('wrong')",
            errors: [ { message: "jaffezhang is keyword" } ]
        }
    ]
});
