/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 18:11:38
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/assets/style/index.less';

import store from './store';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>
);
