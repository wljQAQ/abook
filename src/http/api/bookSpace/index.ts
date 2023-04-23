/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-23 21:27:32
 * @Description: api
 */
import { request } from '@/http';

import type { GetArticlesRes, Article } from './type';

export const getArticlesList = function (id: number | string) {
  return request.post<GetArticlesRes>('/articles/getList', { id });
};

export const getArticlesHomePage = function (id: number | string) {
  return request.post<Article>('/articles/getHomePage', { id });
};

export const createArticle = function (params: Article) {
  return request.post('/articles/create', params);
};
