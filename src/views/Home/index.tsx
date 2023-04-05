/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 22:55:58
 * @Description: 主页面
 */

import { useEffect } from 'react';

import { Menu, Layout, MenuProps } from 'antd';
import { ReadOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@/store/hooks';
import { setUserInfo } from '@/store/modules/user';

import { getUserInfo, getBooks } from '@/http/api/home';

import User from './components/user';
import Books from './components/books';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'];

const Home = () => {
  const dispatch = useAppDispatch();
  const menus: MenuItem = [
    {
      label: '个人知识库',
      icon: <ReadOutlined />,
      key: 'submenu',
      children: [
        {
          label: 'Vue',
          key: 'vue',
        },
      ],
    },
  ]; //菜单列表
  useEffect(() => {
    const fetchUserInfo = async () => {
      const { code, data, msg } = await getUserInfo();
      dispatch(setUserInfo(data));
    };
    fetchUserInfo();
  }, []);
  // getBooks(1);
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
};

Home.displayName = 'Home';

export default Home;
