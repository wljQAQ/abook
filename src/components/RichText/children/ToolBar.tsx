/*
 * @Author: wlj
 * @Date: 2022-11-17 16:42:44
 * @LastEditors: wlj
 * @LastEditTime: 2023-03-16 08:38:00
 * @Description:
 */
import {
  memo,
  RefObject,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Ref
} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import ToolBarBtn from './ToolBarBtn';
import { useImmer } from 'use-immer';

interface StringMap {
  [key: string]: any;
}

interface Properties {
  quillRef: RefObject<ReactQuill>;
}

interface ToolBarRef {
  handleRangeChange: (key: StringMap) => void;
}

interface ToolBarProps {
  header: {
    value: string;
    label: string;
  };
}

const headerMeau: MenuProps['items'] = [
  {
    key: '1',
    label: <h1>标题1</h1>
  },
  {
    key: '2',
    label: <h2>标题2</h2>
  },
  {
    key: '3',
    label: <h3>标题3</h3>
  },
  {
    key: '',
    label: <p>正文</p>
  }
];

let quill: InstanceType<typeof Quill>; //quill实例对象

let ToolBar = forwardRef<ToolBarRef, Properties>(({ quillRef }, ref) => {
  const [toolBar, setToolBar] = useImmer<ToolBarProps>({
    header: {
      value: '',
      label: '正文'
    }
  });

  const dropSelect = useCallback<NonNullable<MenuProps['onClick']>>(
    value => {
      setToolBar(draft => {
        draft.header.value = value.key;
        draft.header.label = value.key === '' ? '正文' : `标题  ${value.key}`;
      });
      console.log(1);
      quill.format('header', value.key);
    },
    [toolBar.header]
  );

  const test = function () {
    quill.format('bold', true);
  };

  const handleRangeChange = useCallback<ToolBarRef['handleRangeChange']>(
    rangeObj => {
      console.log('handleRangeChange');
      if (JSON.stringify(rangeObj) === '{}') {
        setToolBar(draft => {
          draft.header.label = '正文';
        });
        return;
      }
      //遍历
      for (const key in rangeObj) {
        if (Object.prototype.hasOwnProperty.call(rangeObj, key)) {
          switch (key) {
            case 'header':
              console.log(toolBar);
              setToolBar(draft => {
                draft.header.label =
                  toolBar.header.value === '' ? '正文' : `标题  ${toolBar.header.value}`;
              });
              break;

            default:
              break;
          }
        }
      } //end for
    },
    [toolBar]
  );

  useEffect(() => {
    if (quillRef?.current && typeof quillRef?.current?.getEditor === 'function') {
      quill = quillRef?.current?.getEditor();
      quill.on('selection-change', function () {
        const rangeFormat = quill.getFormat();
        // for (const key in rangeFormat) {
        //   if (Object.prototype.hasOwnProperty.call(rangeFormat, key)) {
        //     handleRangeChange(key);
        //   }
        // }
        console.log(rangeFormat, 'selection-change');
      });
    }
  }, [quillRef]);

  useImperativeHandle(ref, () => ({
    handleRangeChange
  }));

  return (
    <div id="toolbar" className="w-full" style={{ display: 'flex', alignItems: 'center' }}>
      {/* 设置标题字体 */}
      <Dropdown
        menu={{ items: headerMeau, onClick: dropSelect }}
        placement="bottomLeft"
        trigger={['click']}
      >
        <Button
          className=" !w-18 shadow-none hover:!bg-gray-100 !text-black"
          value={toolBar.header.value}
        >
          <span>{toolBar.header.label}</span>
          <CaretDownOutlined className="text-gray-500 text-xs"></CaretDownOutlined>
        </Button>
      </Dropdown>
      {/* <select className="ql-header" defaultValue={''}>
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="4" />
        <option value="5" />
        <option value="" />
      </select> */}
      {/* 加粗 */}
      {/* <ToolBarBtn className="ql-bold" tip="加粗"></ToolBarBtn> */}
      {/* <Button className="ql-italic" onClick={test}>
        B
      </Button> */}
      {/* <select className="ql-color" defaultValue={''}>
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
      </select> */}
    </div>
  );
});

ToolBar.displayName = 'ToolBar';
ToolBar = memo(ToolBar);

export default ToolBar;
