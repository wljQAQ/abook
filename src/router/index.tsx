/*
 * @Author: wlj
 * @Date: 2022-10-21 09:20:10
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-04 20:46:24
 * @Description:
 */
import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home'));
const BookSpace = lazy(() => import('@/views/BookSpace'));

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/bookSpack',
    element: <BookSpace />
  }
];

export default routes;
