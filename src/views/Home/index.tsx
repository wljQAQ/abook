/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-15 23:17:38
 * @Description: 主页面
 */

import { useEffect, useState, memo } from 'react';

import { Menu, Layout, MenuProps } from 'antd';
import { ReadOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@/store/hooks';
import { setUserInfo } from '@/store/modules/user';

import { getUserInfo, getBooks } from '@/http/api/home/home';

import User from './components/user';
import Books from './components/books';
import IconFont from '@/components/IconFont';

import type { GetBooksRes } from '@/http/api/home/type';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'];

const defaultMenus: MenuItem = [
  {
    label: '知识库',
    icon: <IconFont size={22} type="abook-book" />,
    key: 'book',
    children: [],
  },
]; //菜单列表

const Home = () => {
  const dispatch = useAppDispatch();

  const [menus, setMenu] = useState<MenuItem>(defaultMenus);
  const [books, setBooks] = useState<GetBooksRes>([]);

  async function getBooksByUserId(userId: number) {
    const { data } = await getBooks(userId); //获取知识库
    setBooks(data);

    setMenu([
      {
        label: '知识库',
        icon: <IconFont size={22} type="abook-book" />,
        key: 'book',
        children: data.map(i => ({
          label: i.title,
          key: i.id,
        })),
      },
    ]);
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { code, data } = await getUserInfo();
      if (code !== 0) return;
      dispatch(setUserInfo(data)); //吧用户状态传递给redux
      getBooksByUserId(data.id);
    };
    fetchUserInfo();
  }, []);

  return (
    <div className="w-full h-full flex">
      <Sider className="h-full border-r border-gray-200" theme="light">
        <User></User>
        <Menu
          className="h-full"
          theme="light"
          items={menus}
          mode="inline"
          defaultSelectedKeys={['book']}
          defaultOpenKeys={['book']}
        />
      </Sider>
      <Content className="px-6 pt-4 bg-white overflow-y-auto">
        <Books books={books}></Books>
      </Content>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
