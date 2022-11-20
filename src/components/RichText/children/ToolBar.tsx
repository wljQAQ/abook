/*
 * @Author: wlj
 * @Date: 2022-11-17 16:42:44
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-20 21:51:50
 * @Description:
 */
import { memo } from 'react';
import { Tooltip, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import ToolBarBtn from './ToolBarBtn';

const ToolBar = memo(() => {
  return (
    <div id="toolbar">
      <Tooltip placement="bottom" title="正文与标题" arrowPointAtCenter>
        <ToolBarBtn className="ql-header" icon={<CaretDownOutlined />}>
          正文
        </ToolBarBtn>
      </Tooltip>
      <Tooltip placement="bottom" title="Prompt Text" arrowPointAtCenter>
        <Button className="ql-bold"></Button>
      </Tooltip>
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
