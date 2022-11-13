/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-12 14:23:13
 * @Description: 主页面
 */

import { memo, ReactElement, useEffect, useRef } from 'react';
import { Menu } from 'antd';

import User from './children/user';
import Books from './children/books';
import { ReadOutlined } from '@ant-design/icons';

const Home = memo(() => {
  const menus = [
    {
      label: '个人知识库',
      icon: <ReadOutlined />,
      key: 'submenu',
      children: []
    }
  ]; //菜单列表

  return (
    <div className="flex w-full h-full">
      <div className="w-52 h-full bg-gray-50">
        <User></User>
        <Menu className="!bg-gray-50" items={menus} mode="inline" />
      </div>
      <div className="px-4 pt-4 flex-1">
        <Books></Books>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
