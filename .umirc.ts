import { defineConfig } from 'umi';
import routes from './config/routes';
import theme from './config/theme';

const baseConfig = {
  routes,
  theme,
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  define: {
    'process.env.versionTag': new Date().toLocaleString(),
    'process.env.APP_TYPE': process.env.APP_TYPE,
  },
  dva: {
    immer: true,
    hmr: true,
  },
  chainWebpack(memo: any, { webpack }: any) {
    memo.plugin('provide-plugin').use(webpack.ProvidePlugin, [
      {
        Cookies: 'js-cookie',
      },
    ]);
  },
  qiankun: {
    slave: {},
  },
} as any;

if (process.env.APP_TYPE !== 'subapp') {
  /**
   * 若以子应用方式部署需要修改配置，在此修改
   * 比如作为子应用集成不需要设置title，否则会影响主应用，作为独立应用访问则需要设置
   */
  // baseConfig.headScripts.push(`https://cdn.bootcss.com/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML`);
  // baseConfig.title = '同步备课';
}

export default defineConfig(baseConfig);
