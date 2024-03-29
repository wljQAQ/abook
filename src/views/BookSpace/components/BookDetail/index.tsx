/*
 * @Author: wulongjiang
 * @Date: 2022-11-13 16:53:21
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-06 16:00:29
 * @Description:
 */
import { memo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { SearchOutlined, PlusOutlined, RightOutlined, HomeOutlined } from '@ant-design/icons';
import { Input, Button, Menu, MenuProps, Dropdown } from 'antd';

import { useImmer } from 'use-immer';

import IconFont from '@/components/IconFont';

import { createArticle, getArticlesList } from '@/http/api/bookSpace';

type MenuItem = Required<MenuProps>['items'];

type ArticleMenu = [
  {
    key: number;
    label: string;
    icon: JSX.Element;
  },
  {
    key: number;
    label: string;
    children: MenuItem;
  },
];

const BookDetail = memo(() => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [menu, setMenu] = useImmer<ArticleMenu>([
    {
      key: 1,
      label: '首页',
      icon: <HomeOutlined />,
    },
    {
      label: '个人知识库',
      key: 2,
      children: [],
    },
  ]);

  /**
   * @description: 拉取文章列表
   * @return {*}
   */
  async function fetchArticleList() {
    const { data } = await getArticlesList(Number(bookId));

    setMenu(menu => {
      const homePageMenu = data.filter(i => i.category === 'index');
      const articleMenu = data.filter(i => i.category !== 'index');
      menu[0].key = Number(homePageMenu[0]?.id);
      menu[1].children = articleMenu.map(i => {
        return { key: Number(i.id), label: i.title || '' };
      });
    });
  }

  useEffect(() => {
    fetchArticleList();
  }, []);

  //文章编辑菜单
  const articleEditMenu: MenuItem = [
    {
      key: 'doc',
      label: '文档',
      icon: <IconFont type="abook-wenbenwendang-txt" />,
    },
  ];

  /**
   * @description: 点击菜单事件
   * @param {MenuProps['onClick']} e
   * @return {*}
   */
  const handleMenuClick: MenuProps['onClick'] = async e => {
    if (e.key === 'doc') {
      const { code, data } = await createArticle({
        bookId: Number(bookId),
      });

      if (code === 0) {
        navigate(`/editor/${data.id}`);
      }
    }
  };

  const handleArticleListClick: MenuProps['onClick'] = async e => {
    navigate(`/bookSpace/${bookId}/${e.key}`);
  };

  return (
    <>
      <div className="border-b border-gray-200 border border-solid border-l-0 border-t-0 border-r-0">
        {/* 返回个人知识库 */}
        <div
          className="flex items-center text-gray-400 cursor-pointer w-fit"
          onClick={() => navigate('/')}
        >
          <IconFont size={20} type="abook-shouye" />
          <span className="px-1">
            <RightOutlined style={{ fontSize: '12px' }} />
          </span>
          <span className="text-xs hover:text-gray-500">个人知识库</span>
        </div>
        {/* 知识库设置 */}
        <div className="flex items-center py-4">
          <IconFont size={24} type="abook-book" />
          <span className="px-2 font-bold">test</span>
        </div>
      </div>
      {/* 搜索框和按钮 */}
      <div className="flex items-center mt-3">
        <Input
          style={{ borderRadius: '10px' }}
          placeholder="搜索"
          prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
        />
        <Dropdown menu={{ items: articleEditMenu, onClick: handleMenuClick }}>
          <Button
            className="ml-2"
            style={{ borderRadius: '5px', height: '30px' }}
            icon={<PlusOutlined style={{ color: '#bfbfbf' }} />}
          ></Button>
        </Dropdown>
      </div>
      <div className="mt-2">
        <Menu
          className="!border-none"
          inlineIndent={10}
          items={menu}
          onClick={handleArticleListClick}
          mode="inline"
          defaultSelectedKeys={['1']}
        />
      </div>
    </>
  );
});

BookDetail.displayName = 'BookDetail';

export default BookDetail;
