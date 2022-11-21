/*
 * @Author: wlj
 * @Date: 2022-11-17 16:42:44
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-21 17:43:23
 * @Description:
 */
import { memo } from 'react';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import ToolBarBtn from './ToolBarBtn';

const headerMeau: MenuProps['items'] = [
  {
    key: '1',
    label: '正文'
  },
  {
    key: '2',
    label: '标题1'
  },
  {
    key: '3',
    label: '标题2'
  }
];
// const A = function () {
//   return <Button>111</Button>;
// };
const ToolBar = memo(() => {
  return (
    <div id="toolbar" style={{ display: 'flex', alignItems: 'center' }}>
      <Dropdown menu={{ items: headerMeau }} placement="bottomLeft" trigger={['click']}>
        <ToolBarBtn icon={<CaretDownOutlined />}>正文</ToolBarBtn>
      </Dropdown>
      <ToolBarBtn className="ql-bold !w-7 !h-6"></ToolBarBtn>
      <Button className="ql-italic"></Button>
      <select className="ql-color" defaultValue={''}>
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
      </select>
    </div>
  );
});

ToolBar.displayName = 'ToolBar';

export default ToolBar;
