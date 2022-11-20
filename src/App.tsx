/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-20 19:44:15
 * @Description:
 */
import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import { ConfigProvider } from 'antd';

const App = memo(() => {
  return (
    <div className="app">
      <ConfigProvider>
        <Suspense fallback="loading">{useRoutes(routes)}</Suspense>
      </ConfigProvider>
    </div>
  );
});

App.displayName = 'App';

export default App;
