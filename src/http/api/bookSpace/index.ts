/*
 * @Author: wlj
 * @Date: 2022-10-26 14:12:28
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-04 20:54:48
 * @Description: api
 */
import { request } from '@/http';

import type { GetArticlesRes, Article } from './type';

export const getArticlesList = function (bookId: number | string) {
  return request.post<GetArticlesRes>('/articles/getList', { bookId });
};

export const getArticlesHomePage = function (id: number | string) {
  return request.post<Article>('/articles/getHomePage', { id });
};

export const createArticle = function (article: Article) {
  return request.post<Article>('/articles/create', article);
};

export const getArticlesDetail = function (id: number | string) {
  return request.post<Article>('/articles/getDetail', { id });
};

export const updateArticleDetail = function (article: Article) {
  return request.post('/articles/update', article);
};
