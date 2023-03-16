/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-03-16 21:01:17
 * @Description:
 */
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <div className="app">
      <ConfigProvider>
        <Suspense fallback="loading">{useRoutes(routes)}</Suspense>
      </ConfigProvider>
    </div>
  );
};

App.displayName = 'App';

export default App;
