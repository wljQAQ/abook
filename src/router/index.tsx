/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-18 08:44:14
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
    path: '/bookSpace',
    element: <BookSpace />
  },
  {
    path: '/editor',
    element: <Editor />
  }
];

export default routes;
