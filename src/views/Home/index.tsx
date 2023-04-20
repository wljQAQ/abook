/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-20 15:30:11
 * @Description: 主页面
 */

import { useEffect, useState } from 'react';

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

type MenuItem2 = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem2 {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem2;
}

const defaultMenus: MenuItem = [
  {
    label: '知识库',
    icon: <IconFont size={22} type="abook-book" />,
    key: 'book',
    children: [
      {
        label: 'Vue',
        key: 'vue',
      },
    ],
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
        icon: <ReadOutlined />,
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
    <Layout className="w-full h-full">
      <Sider className="h-full border-r border-gray-200" theme="light">
        <User></User>
        <Menu
          theme="light"
          // items={menus}
          items={menus}
          mode="inline"
          defaultSelectedKeys={['book']}
          defaultOpenKeys={['book']}
        />
      </Sider>
      <Content className="px-6 pt-4 bg-white">
        <Books books={books}></Books>
      </Content>
    </Layout>
  );
};

Home.displayName = 'Home';

export default Home;
