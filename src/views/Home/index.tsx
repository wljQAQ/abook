/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-31 16:43:12
 * @Description: 主页面
 */

import { memo } from 'react';
import { Menu } from 'antd';

import User from './components/user';
import { ReadOutlined } from '@ant-design/icons';

const Home = memo(() => {
  const items = [
    {
      label: '个人知识库',
      icon: <ReadOutlined />,
      key: 'submenu',
      children: [{ label: '子菜单项', key: 'submenu-item-1' }]
    }
  ];

  return (
    <div className="flex w-full h-full">
      <div className="w-52 h-full bg-gray-50">
        <User></User>
        <Menu className="!bg-gray-50" items={items} mode="inline" />
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
