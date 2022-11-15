/*
 * @Author: wulongjiang
 * @Date: 2022-11-13 16:53:21
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-15 22:11:46
 * @Description:
 * @FilePath: \blog\src\views\BookSpace\children\BookDetail\index.tsx
 */
import { memo } from 'react';
import {
  BankTwoTone,
  BookTwoTone,
  SearchOutlined,
  PlusOutlined,
  ReadOutlined
} from '@ant-design/icons';
import { Input, Button, Menu } from 'antd';

const BookDetail = memo(() => {
  const menus = [
    {
      label: '个人知识库',
      icon: <ReadOutlined />,
      key: 'submenu',
      children: []
    }
  ]; //菜单列表

  return (
    <>
      <div className="border-b border-gray-200">
        {/* 返回个人知识库 */}
        <div className="flex items-center text-gray-400 cursor-pointer">
          <BankTwoTone twoToneColor="#7e5bef" />
          <span className="px-1">{'>'}</span>
          <span className="text-xs hover:text-gray-500">个人知识库</span>
        </div>
        {/* 知识库设置 */}
        <div className="flex items-center py-4">
          <BookTwoTone twoToneColor="#7e5bef" className=" text-xl" />
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
        <Menu className="!border-none" inlineIndent={0} items={menus} mode="inline" />
      </div>
    </>
  );
});

BookDetail.displayName = 'BookDetail';

export default BookDetail;
