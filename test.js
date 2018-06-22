var res = require("babel-core").transform("console.log(1);alert(2)", {
  plugins: ["my-babel-plugin"]
  //plugins: ["transform-remove-console-enhance"]
})
console.log(res.code)