/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-06 16:02:37
 * @Description:
 */
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import { ConfigProvider, Skeleton } from 'antd';

const App = () => {
  return (
    <div className="app">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <Suspense fallback={<Skeleton />}>{useRoutes(routes)}</Suspense>
      </ConfigProvider>
    </div>
  );
};

App.displayName = 'App';

export default App;
