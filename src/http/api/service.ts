/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-27 10:21:51
 * @Description: api
 */
import { request } from '@/http';


// interface data {
//   keywords: string;
// }

export const test = function() {
  return request.post('/user/getUser');
};
