/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-28 10:42:26
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/assets/style/index.less';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
