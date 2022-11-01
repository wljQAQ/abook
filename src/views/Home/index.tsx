/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-01 11:10:59
 * @Description: 主页面
 */

import { memo } from 'react';
import { Menu } from 'antd';

import User from './components/user';
import Books from './components/books';

import { ReadOutlined } from '@ant-design/icons';

const Home = memo(() => {
  const items = [
    {
      label: '个人知识库',
      icon: <ReadOutlined />,
      key: 'submenu',
      children: []
    }
  ];

  return (
    <div className="flex w-full h-full">
      <div className="w-52 h-full bg-gray-50">
        <User></User>
        <Menu className="!bg-gray-50" items={items} mode="inline" />
      </div>
      <div className="px-4 pt-4">
        <Books></Books>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
