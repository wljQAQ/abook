/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-20 19:38:41
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
