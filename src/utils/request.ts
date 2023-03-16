/**
  * @description 封装axios请求
  * @author GuAn
  * @time 2023-03-14 20:30:03
 */
import axios from "axios";
import Cookies from "js-cookie";
import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VITE_APP_BASE_API,
  timeout: 6000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 没有请求头
    if (!config.headers) {
      throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    // 请求头加入Token
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    /**
     * code 响应码
     * message 提示信息
     */
    const { code, message } = response.data;

    if (code == "200") {
      return response.data;
    } else if (code === "10010" || code === "10011" || code === "10012") {
      // Token过期/无效/未激活
      Cookies.remove("token");
      window.location.href = "/"; // 跳转登录页
      // return ElMessageBox.alert("当前页面已失效，请重新登录", "提示", {});
      throw Error("当前页面已失效，请重新登录");
    } else {
      // ElMessage.error(message || "系统出错");
      return Promise.reject(new Error(message || "Error"));
    }
  },
  (error) => {
    console.log(error, "error");

    // 响应错误
    if (error.response && error.response.status) {
      const status = error.response.status;
      console.log(status, "status");
    }
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
