import flyio from '@/utils/request'
import { userApiUrl } from './config'

/**
 * 微信用户登录接口
 * @param code wx.login微信接口返回的code参数
 */
export function apiUserLogin(code: string) {
  return flyio.post(userApiUrl, { code })
}
