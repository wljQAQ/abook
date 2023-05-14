/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-14 22:37:41
 * @Description:
 */
import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home'));
const BookSpace = lazy(() => import('@/views/BookSpace'));
const Editor = lazy(() => import('@/views/Editor'));
const ReactStudy = lazy(() => import('@/views/ReactStudy'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bookSpace/:bookId/:articleId',
    element: <BookSpace />,
  },
  {
    path: '/editor/:id',
    element: <Editor />,
  },
  {
    path: '/ReactStudy',
    element: <ReactStudy />,
  },
];

export default routes;
