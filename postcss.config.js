module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 转换rem的根值为100，这样1px在转换时会变为0.01rem，具体值应根据你的设计稿和上述resize方法里的逻辑相符
      propList: ['*'] // 应用在所有的CSS属性上
    }
  }
};