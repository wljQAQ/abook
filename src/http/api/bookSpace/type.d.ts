/*
 * @Author: wlj
 * @Date: 2023-04-08 17:17:59
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-01 17:17:05
 * @Description:
 */

export enum Category {
  Index = 'index', //首页
  Default = '', //不是首页
}

export interface Article {
  id?: number;
  bookId?: number;
  title?: string;
  body?: string;
  category?: Category; //首页
  descriptions?: string;
  published?: boolean;
}


export type GetArticlesRes = Article[] | [];
