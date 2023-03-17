import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 导入不同的module模块
import userStore from "./userStore";

export default new Vuex.Store({
  // 把 store 分离出去
  modules: {
    user: userStore,
  },
});
