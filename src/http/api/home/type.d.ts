/*
 * @Author: wlj
 * @Date: 2023-04-08 17:17:59
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-20 16:17:13
 * @Description:
 */

interface Book {
  id: number;
  title: string;
  userId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type GetBooksRes = Book[] | [];
