/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wlj
 * @LastEditTime: 2023-05-05 09:11:23
 * @Description: api
 */
import { request } from '@/http';

import { UserState } from '@/store/modules/user';

import type { GetBooksRes } from './type';
import { Article } from './../bookSpace/type.d';

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
  return request.post<GetBooksRes[0] & Record<'homePage', Article>>('/book/createBook', params);
};
