/*
 * @Author: wlj
 * @Date: 2022-11-01 11:01:34
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-09 11:44:50
 * @Description:
 */
import { memo, useMemo, useState } from 'react';

import NewBooksModal from './NewBooksModal';
import IconFont from '@/components/IconFont';

import { Card, Col, Row } from 'antd';
import { MenuOutlined, AppstoreFilled } from '@ant-design/icons';
const { Meta } = Card;

import Switch from './Switch';

const Books = memo(() => {
  const [isShowBooksModal, setIsShowBooksModal] = useState(false);

  const { checked, unChecked } = useMemo(() => {
    return {
      checked: <AppstoreFilled />,
      unChecked: <MenuOutlined />,
    };
  }, []);

  function handleBooksModal() {
    setIsShowBooksModal(!isShowBooksModal);
  }

  return (
    <>
      <div className="flex items-center mb-4">
        <div className=" text-lg font-bold pr-2">知识库</div>
        <Switch checkedChildren={checked} unCheckedChildreb={unChecked}></Switch>
      </div>

      {/* <div className="flex items-center w-full mt-4">
        <div className=" text-base">我的知识库</div>
        <div className="h-px flex-1 bg-gray-200 ml-2"></div>
      </div> */}
      <Row gutter={16}>
        <Col span={8}>
          <Card className=" border-gray-300">
            <Meta
              className="pb-3"
              avatar={<IconFont size={30} type="abook-book" />}
              title="知识库"
              description="test"
            />
            <div className=" text-gray-400 text-xs pt-2 border-t border-gray-200 border-solid border-b-0 border-l-0 border-r-0">
              <div className="h-24 flex-center">知识库暂无内容</div>
            </div>
          </Card>
        </Col>

        <Col span={8} className='h-full'>
          <Card className=" border-gray-300 h-full" onClick={handleBooksModal}>
            <div className='h-full'>
              <div className="text-center text-xl">+</div>
              <div>新建知识库</div>
            </div>
          </Card>
        </Col>
      </Row>

      <div className="flex mt-3 select-none">
        {/* 新建知识库 */}
        <div
          className="flex-center w-1/3 border border-dashed h-48 text-gray-400 font-bold cursor-pointer"
          onClick={handleBooksModal}
        >
          <div>
            <div className="text-center text-xl">+</div>
            <div>新建知识库</div>
          </div>
        </div>

        <NewBooksModal
          show={isShowBooksModal}
          onOk={handleBooksModal}
          onCancel={() => setIsShowBooksModal(!isShowBooksModal)}
        />
      </div>
    </>
  );
});

Books.displayName = 'Books';

export default Books;
