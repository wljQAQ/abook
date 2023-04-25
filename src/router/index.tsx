/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-25 22:21:46
 * @Description:
 */
import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home'));
const BookSpace = lazy(() => import('@/views/BookSpace'));
const Editor = lazy(() => import('@/views/Editor'));

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/bookSpace/:id',
    element: <BookSpace />
  },
  {
    path: '/editor/:id',
    element: <Editor />
  }
];

export default routes;
