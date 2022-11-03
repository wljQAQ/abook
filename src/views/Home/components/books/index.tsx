/*
 * @Author: wlj
 * @Date: 2022-11-01 11:01:34
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-03 11:27:00
 * @Description:
 */
import NewBooksModal from '@/components/NewBooksModal';
import { MenuOutlined, AppstoreFilled } from '@ant-design/icons';
import { memo, useMemo, useState } from 'react';
import Switch from './Switch';

const Books = memo(() => {
  const [isShowBooksModal, setIsShowBooksModal] = useState(false);

  const { checked, unChecked } = useMemo(() => {
    return {
      checked: <AppstoreFilled />,
      unChecked: <MenuOutlined />
    };
  }, []);

  function handleBooksModal() {
    setIsShowBooksModal(!isShowBooksModal);
  }

  return (
    <>
      <div className="flex items-center">
        <div className=" text-lg font-bold pr-2">知识库</div>
        <Switch checkedChildren={checked} unCheckedChildreb={unChecked}></Switch>
      </div>

      <div className="flex items-center w-full mt-4">
        <div className=" text-base">我的知识库</div>
        <div className="h-px flex-1 bg-gray-200 ml-2"></div>
      </div>

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
