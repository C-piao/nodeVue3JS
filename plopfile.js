// 定义 Plop 自动生成的内容及对应的模板。
//http://www.lixianglong.cn/2022/01/17/application/fore-end/nodejs/Plopfile.js%E4%BD%BF%E7%94%A8/
module.exports = function (plop) {
  plop.setWelcomeMessage('请选择需要创建的模式：');
  plop.setGenerator('page', require('./plop-tpls/page/prompt'));
  plop.setGenerator('component', require('./plop-tpls/component/prompt'));
  plop.setGenerator('store', require('./plop-tpls/store/prompt'));
};
