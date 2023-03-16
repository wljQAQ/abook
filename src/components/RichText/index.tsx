/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-25 10:34:36
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText\index.tsx
 */
import { memo, useRef, useState, ReactNode, ElementRef } from 'react';
import ReactQuill from 'react-quill';
import { ReactQuillProps } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import './index.less';
import ToolBar from '@/components/RichText/children/ToolBar';

const RichText = memo(() => {
  const [value] = useState('');

  const quillRef = useRef<ReactQuill>(null);
  // const toolBarRef = useRef<ForwardRefExoticComponent<>>(null);
  const toolBarRef = useRef<ElementRef<typeof ToolBar>>(null);

  const handleQuillChange: ReactQuillProps['onChange'] = function (value, delta, source, editor) {
    // console.log(value, delta, source, editor, 'editor change');
  };
  const handleQuillFocus: ReactQuillProps['onFocus'] = function (selection, source, editor) {
    // console.log(selection, source, editor, 'editor focus');
  };
  const handleQuillSelection: ReactQuillProps['onChangeSelection'] = function (
    selection,
    source,
    editor
  ) {
    // console.log(source, selection, editor);
    const rangeFormat = quillRef.current?.getEditor().getFormat();
    toolBarRef.current?.handleRangeChange(rangeFormat || {});
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <ToolBar ref={toolBarRef} quillRef={quillRef}></ToolBar>
        <ReactQuill
          ref={quillRef}
          className="flex-1"
          placeholder="test"
          value={value}
          theme={''}
          onChange={handleQuillChange}
          onFocus={handleQuillFocus}
          onChangeSelection={handleQuillSelection}
        >
          <div className="my-editing-area relative h-full w-full border border-soild"></div>
        </ReactQuill>
      </div>
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
