/*
 * @Author: wlj
 * @Date: 2022-11-17 16:42:44
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-17 16:53:07
 * @Description:
 */
import { memo } from 'react';

const ToolBar = memo(() => {
  return (
    <div id="toolbar">
      <select className="ql-header" defaultValue={''} onChange={e => e.persist()}>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
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
