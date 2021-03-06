export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('subapp bootstrap', props);
    window.APP_NAME = props && props.appName ? props.appName : '';
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('subapp mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('subapp unmount', props);
  },
};
