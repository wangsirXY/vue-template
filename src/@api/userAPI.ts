/** 
  * @description 用户模块API
  * @author GuAn
  * @time 2023-03-16 17:49:49
*/
import axios from "@/utils/myAxios";

// 模块前缀
const prefix = "/users"

/** 获取用户信息
 * @param id 用户id
 * @param mobile 手机号
 * @returns
 */
export const getUserInfo = async ({ id, mobile }: { id: number, mobile: string }) => {
  return await axios.post(`${prefix}/getUserInfo`, { id, mobile });
};