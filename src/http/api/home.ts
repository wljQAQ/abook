/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 22:40:49
 * @Description: api
 */
import { request } from '@/http';

export const getUserInfo = function () {
  return request.post('/user/getUser');
};

export const getBooks = function (id: number) {
  return request.post('/book/getBooks', { uuid: id });
};

interface Book {
  title: string;
  description?: string;
}
export const createBook = function ({ title, description }: Book) {
  return request.post('/book/createBook', { title, description });
};
