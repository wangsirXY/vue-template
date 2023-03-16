/**
  * @description 用户模块数据类型
  * @author GuAn
  * @time 2023-03-16 17:03:46
  */

export interface UserInfo {
  id: number;
  token: string;
  // 手机号
  mobile: string;
  // 昵称
  nickname: string;
}