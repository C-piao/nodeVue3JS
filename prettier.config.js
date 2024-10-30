//代码格式化工具  https://yulilong.cn/doc/tool/004-prettier%E4%BB%A3%E7%A0%81%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%B7%A5%E5%85%B7.html
module.exports = {
  //  配置列宽 每行代码长度（默认80)
  printWidth: 140,
  // 使用分号, 默认true
  semi: true,
  //Vue文件中＜script＞和＜style＞是否缩进
  vueIndentScriptAndStyle: true,
  // 使用单引号（默认false）
  singleQuote: true,
  // 多行使用拖尾逗号（默认none）
  trailingComma: 'all',
  // markdown换行,always：超过printWidth就换行，never：不换行，preserve：按照原样处理
  proseWrap: 'never',
  //是否使用空白字符格式化HTML文件 "css" 按照CSS的display规则，块元素格式化，行内元素不格式化（默认值） "strict" 都不格式化"ignore" 都格式化
  htmlWhitespaceSensitivity: 'strict',
  //endOfLine：换行符  "auto" 不处理"lf" 换行 Linux或macOS（默认值）"crlf" 回车换行 Windows "cr" 回车
  endOfLine: 'auto',
};
