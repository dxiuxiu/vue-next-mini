import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
export default[{
  // 入口文件
  input:'packages/vue/src/index.ts',
  output:[
    // 导出 life 模式包
    {
      // 开启sourcemap
      sourcemap:true,
      // 导出文件地址
      file:'./packages/vue/dist/vue.js',
      // 生成包格式
      format:'iife',
      // 变量名
      name:'Vue'
    }
  ],
  // 插件
  plugin:[
    // 解析 ts
    typescript({
      sourceMap:true
    }),
    // 模块导入路径补全
    resolve(),
    // 转 commonjs 为 ESM
    commonjs()
  ]
}]