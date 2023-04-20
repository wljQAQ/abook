/*
 * @Author: wulongjiang
 * @Date: 2022-11-13 16:53:21
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-20 15:07:30
 * @Description:
 */
import { memo } from 'react';
import {
  BankTwoTone,
  BookTwoTone,
  SearchOutlined,
  PlusOutlined,
  ReadOutlined,
  RightOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Input, Button, Menu, MenuProps } from 'antd';

import IconFont from '@/components/IconFont';

type MenuItem = Required<MenuProps>['items'];

const BookDetail = memo(() => {
  const menus: MenuItem = [
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
  ]; //菜单列表

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
        <Button
          className="ml-2"
          style={{ borderRadius: '5px', height: '30px' }}
          icon={<PlusOutlined style={{ color: '#bfbfbf' }} />}
        ></Button>
      </div>
      <div className="mt-2">
        <Menu
          className="!border-none"
          inlineIndent={10}
          items={menus}
          mode="inline"
          defaultSelectedKeys={['1']}
        />
      </div>
    </>
  );
});

BookDetail.displayName = 'BookDetail';

export default BookDetail;
