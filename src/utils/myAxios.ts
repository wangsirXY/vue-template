/**
  * @description 封装单例axios
  * @author GuAn
  * @time 2023-03-16 17:34:58
 */
import request from "./request";

class Axios {
  constructor(public request: unknown) { }

  /** Get 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 额外配置
   * @returns 响应结果
   */
  public async get(url: string, params: object, config?: object) {
    try {
      return await request.get(url, {
        params,
        ...config,
      });
    } catch (error) {
      return this.error(error);
    }
  }

  /** Post 请求
   * @param url 请求地址
   * @param data 请求参数
   * @param config 额外配置
   * @returns 响应结果
   */
  public async post(url: string, data: object, config?: object) {
    try {
      return await request.post(url, data, {
        ...config,
      });
    } catch (error) {
      return this.error(error);
    }
  }

  /** Put 请求
   * @param url 请求地址
   * @param data 请求参数
   * @param config 额外配置
   * @returns 响应结果
   */
  public async put(url: string, data: object, config?: object) {
    try {
      return await request.put(url, data, {
        ...config,
      });
    } catch (error) {
      return this.error(error);
    }
  }

  /** patch 请求
   * @param url 请求地址
   * @param data 请求参数
   * @param config 额外配置
   * @returns 响应结果
   */
  public async patch(url: string, data: object, config?: object) {
    try {
      return await request.put(url, data, {
        ...config,
      });
    } catch (error) {
      return this.error(error);
    }
  }

  /** Delete 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 额外配置
   * @returns 响应结果
   */
  public async delete(url: string, params: object, config?: object) {
    try {
      return await request.delete(url, {
        params,
        ...config,
      });
    } catch (error) {
      return this.error(error);
    }
  }

  /** 请求错误处理
   * @param err 错误信息
   */
  private error(err: any) {
    throw Error(`${err.code}: ${err.message}`);
    // throw new Error("ECode:" + err.code);
  }
}

export default new Axios(request);