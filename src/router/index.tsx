/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wlj
 * @LastEditTime: 2023-05-05 08:44:42
 * @Description:
 */
import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home'));
const BookSpace = lazy(() => import('@/views/BookSpace'));
const Editor = lazy(() => import('@/views/Editor'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bookSpace/:bookId/:ArticleId',
    element: <BookSpace />,
  },
  {
    path: '/editor/:id',
    element: <Editor />,
  },
];

export default routes;
