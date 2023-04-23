/*
 * @Author: wlj
 * @Date: 2022-11-01 11:01:34
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-23 18:48:52
 * @Description:
 */
import { memo, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Card, List, Dropdown, Button, Space } from 'antd';
import { DownOutlined, PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import NewBooksModal from './NewBooksModal';
import IconFont from '@/components/IconFont';
import Switch from './Switch';

import type { GetBooksRes } from '@/http/api/home/type';

const { Meta } = Card;

interface Props {
  books: GetBooksRes;
}

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

const items: MenuProps['items'] = [
  {
    label: '新建知识库',
    key: '1',
  },
  {
    label: '新建分组',
    key: '2',
  },
];

const Books = memo(({ books }: Props) => {
  const [isShowBooksModal, setIsShowBooksModal] = useState(false);
  const navigate = useNavigate();

  const { checked, unChecked } = useMemo(() => {
    return {
      checked: '我个人的',
      unChecked: '邀请协作的',
    };
  }, []);

  function handleBooksClick(item: GetBooksRes[0]) {
    navigate(`/bookSpace/${item.id}`);
  }

  function handleBooksModal() {
    setIsShowBooksModal(!isShowBooksModal);
  }

  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click2', e, isShowBooksModal);
    handleBooksModal();
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <div className="mb-4">
        <div className="text-lg font-bold pr-2">知识库</div>
      </div>
      <div className="flex justify-between mb-4">
        <Switch checkedChildren={checked} unCheckedChildreb={unChecked}></Switch>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              <PlusOutlined />
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <List
        split={false}
        className=" justify-between"
        grid={{
          gutter: 20,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        locale={{
          emptyText: '快去创建数据库吧~',
        }}
        dataSource={books}
        renderItem={item => (
          <List.Item className="!p-0" onClick={() => handleBooksClick(item)}>
            <Card className=" border-gray-300 cursor-pointer">
              <Meta
                className="pb-3"
                avatar={<IconFont size={30} type="abook-book" />}
                title={
                  <div className="flex justify-between w-full">
                    <span>{item.title}</span>
                    <Button icon={<EllipsisOutlined />} size="small" />
                  </div>
                }
                description="test"
              />
              {/* <div className=" text-gray-400 text-xs pt-2 border-t border-gray-200 border-solid border-b-0 border-l-0 border-r-0">
                <div className="h-24 flex-center">知识库暂无内容</div>
              </div> */}
              <ul className="text-gray-400 text-xs pt-6  pl-4 border-t border-gray-200 border-solid border-b-0 border-l-0 border-r-0">
                <li>
                  <div className="flex justify-between cursor-pointer mb-3">
                    <div>标题</div>
                    <div>时间20:13</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between cursor-pointer mb-3">
                    <div>标题</div>
                    <div>时间20:13</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between cursor-pointer mb-3">
                    <div>标题</div>
                    <div>时间20:13</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between cursor-pointer">
                    <div>标题</div>
                    <div>时间20:13</div>
                  </div>
                </li>
              </ul>
            </Card>
          </List.Item>
        )}
      />

      <NewBooksModal
        show={isShowBooksModal}
        onOk={handleBooksModal}
        onCancel={() => setIsShowBooksModal(!isShowBooksModal)}
      />
    </>
  );
});

Books.displayName = 'Books';

export default Books;
