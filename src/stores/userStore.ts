/** 
  * @description 用户模块Store
  * @author GuAn
  * @time 2023-03-16 17:01:08
  */
import { defineStore } from "pinia";
import type { UserInfo } from "./@types/user.type";

type States = {
  // 用户信息
  userInfo: Partial<UserInfo>
};

type Getters = {};

type Actions = {};

export const useHomeStore = defineStore<
  "home",
  States,
  Getters,
  Actions
>("home", {
  state: () => ({
    // 用户信息
    userInfo: {}
  }),
  getters: {},
  actions: {},
  // 数据持久化
  // persist: true,
});
