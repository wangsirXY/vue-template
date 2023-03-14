/** 
  * @description 用户模块Store
  * @author GuAn
  * @time 2023-03-14 20:21:15
  */
import { defineStore } from "pinia";
import type { UserInfo } from "./@type/user.types";

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
