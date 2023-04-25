/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-25 08:38:02
 * @Description: api
 */
import { request } from '@/http';

import { UserState } from '@/store/modules/user';

import type { GetBooksRes } from './type';

export const getUserInfo = function () {
  return request.post<UserState['userInfo']>('/user/getUser');
};

/**
 * @description: 获取知识库
 * @param {number} id 用户id
 * @return {*}
 */
export const getBooks = function (id: number) {
  return request.post<GetBooksRes>('/book/getBooks', { id });
};

interface Book {
  title: string;
  description?: string;
  userId: number;
}
/**
 * @description: 创建知识库
 * @param {Book} param1
 * @return {*}
 */
export const createBook = function (params: Book) {
  return request.post<GetBooksRes[0]>('/book/createBook', params);
};
