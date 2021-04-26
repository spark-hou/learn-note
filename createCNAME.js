/**
 * @author  sparkHou
 * @date 2021-04-01 16:31
 * @Description:
 */
const fs = require('fs');
const path = require('path');

function copy() {
  fs.writeFileSync(path.join(__dirname, `/${process.env.VUE_APP_OUTPUT}/CNAME`), fs.readFileSync(path.join(__dirname, './CNAME')));
}


class CreateCNAME {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    // 在emit阶段插入钩子函数
    compiler.hooks.done.tap('MyWebpackPlugin', () => {
      console.log('Hello World!');
      copy();
    });
  }
}


module.exports = CreateCNAME;
