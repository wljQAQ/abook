/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-03-16 20:48:48
 * @Description: 主页面
 */

import { memo } from 'react';
import { Menu, Layout, MenuProps } from 'antd';

import User from './components/user';
import Books from './components/books';
import { ReadOutlined } from '@ant-design/icons';
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'];

const Home = memo(() => {
  const menus: MenuItem = [
    {
      label: '个人知识库',
      icon: <ReadOutlined />,
      key: 'submenu',
      children: [
        {
          label: 'Vue',
          key: 'vue'
        }
      ]
    }
  ]; //菜单列表

  return (
    <Layout className="w-full h-full">
      <Sider className="h-full border-r border-gray-200" theme="light">
        <User></User>
        <Menu items={menus} mode="inline" />
      </Sider>
      <Content className="px-4 pt-4 bg-white">
        <Books></Books>
      </Content>
    </Layout>
  );
});

Home.displayName = 'Home';

export default Home;
