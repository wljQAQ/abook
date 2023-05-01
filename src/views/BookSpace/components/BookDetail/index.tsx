/*
 * @Author: wulongjiang
 * @Date: 2022-11-13 16:53:21
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-01 17:20:54
 * @Description:
 */
import { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { SearchOutlined, PlusOutlined, RightOutlined, HomeOutlined } from '@ant-design/icons';
import { Input, Button, Menu, MenuProps, Dropdown } from 'antd';

import IconFont from '@/components/IconFont';

import { createArticle } from '@/http/api/bookSpace';

type MenuItem = Required<MenuProps>['items'];

const BookDetail = memo(() => {
  const { id } = useParams();

  //菜单列表
  const articleMenus: MenuItem = [
    {
      key: 1,
      label: '首页',
      icon: <HomeOutlined />,
    },
    {
      label: '个人知识库',
      // icon: <IconFont size={24} type="abook-book" />,
      key: 2,
      children: [],
    },
  ];
  //文章编辑菜单
  const articleEditMenu: MenuItem = [
    {
      key: 'doc',
      label: '文档',
      icon: <IconFont type="abook-wenbenwendang-txt" />,
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = async e => {
    if (e.key === 'doc') {
      const { code, msg } = await createArticle({
        bookId: Number(id),
      });
    }
    console.log('click', e);
  };

  return (
    <>
      <div className="border-b border-gray-200 border border-solid border-l-0 border-t-0 border-r-0">
        {/* 返回个人知识库 */}
        <div className="flex items-center text-gray-400 cursor-pointer">
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
          items={articleMenus}
          mode="inline"
          defaultSelectedKeys={['1']}
        />
      </div>
    </>
  );
});

BookDetail.displayName = 'BookDetail';

export default BookDetail;
