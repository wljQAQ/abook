/*
 * @Author: wlj
 * @Date: 2022-11-01 11:01:34
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-01 16:36:26
 * @Description:
 */
import { MenuOutlined, AppstoreFilled } from '@ant-design/icons';
import { memo } from 'react';
import Switch from './Switch';

const Books = memo(() => {
  function test(val?: Boolean) {
    console.log(val,'test');
  }
  return (
    <>
      <div>
        <span className=" text-lg font-bold pr-2">知识库</span>
        <Switch
          checkedChildren={<AppstoreFilled />}
          unCheckedChildreb={<MenuOutlined />}
          onChange={val => test(val)}
        ></Switch>
      </div>
    </>
  );
});

Books.displayName = 'Books';

export default Books;
