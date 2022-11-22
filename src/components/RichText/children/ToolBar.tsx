/*
 * @Author: wlj
 * @Date: 2022-11-17 16:42:44
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-22 17:36:56
 * @Description:
 */
import { memo, RefObject, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import ToolBarBtn from './ToolBarBtn';
import { useImmer } from 'use-immer';

interface Properties {
  quillRef: RefObject<ReactQuill>;
}

interface ToolBarProps {
  header: {
    value: string;
    label: string;
  };
}

const headerMeau: MenuProps['items'] = [
  {
    key: '',
    label: <p>正文</p>
  },
  {
    key: '1',
    label: <h1>标题1</h1>
  },
  {
    key: '2',
    label: <h1>标题2</h1>
  },
  {
    key: '3',
    label: <h1>标题3</h1>
  }
];

let quill: InstanceType<typeof Quill>; //quill实例对象

const ToolBar = memo(({ quillRef }: Properties) => {
  const [toolBar, setToolBar] = useImmer<ToolBarProps>({
    header: {
      value: '',
      label: '正文'
    }
  });

  const dropSelect: MenuProps['onClick'] = function (value) {
    console.log(value);
    setToolBar(draft => {
      draft.header.value = value.key;
      // draft.header.label = headerMeau.find(item => item?.key === value.key)!.label;
    });
    console.log(quill);
    quill.format('header', value.key);
  };
  useEffect(() => {
    if (quillRef?.current && typeof quillRef?.current?.getEditor === 'function') {
      quill = quillRef?.current?.getEditor();
    }
  });
  return (
    <div id="toolbar" style={{ display: 'flex', alignItems: 'center' }}>
      {/* 设置标题字体 */}
      <Dropdown
        menu={{ items: headerMeau, onClick: dropSelect }}
        placement="bottomLeft"
        trigger={['click']}
      >
        <Button className=" !w-14 hover:!bg-gray-100 !text-black" value={toolBar.header.value}>
          <span>{toolBar.header.label}</span>
          <CaretDownOutlined className="text-gray-500 text-xs"></CaretDownOutlined>
        </Button>
      </Dropdown>
      {/* 加粗 */}
      <ToolBarBtn className="ql-bold" tip="加粗"></ToolBarBtn>
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
