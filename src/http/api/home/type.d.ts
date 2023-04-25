/*
 * @Author: wlj
 * @Date: 2023-04-08 17:17:59
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-25 08:36:28
 * @Description:
 */

export interface Book {
  id: number;
  title: string;
  userId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type GetBooksRes = Book[] | [];
