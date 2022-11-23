/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-23 17:13:58
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText\index.tsx
 */
import ReactQuill from 'react-quill';
import { ReactQuillProps } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import './index.less';
import { memo, useRef, useState } from 'react';
import ToolBar from '@/components/RichText/children/ToolBar';
const modules = {
  toolbar: {
    container: '#toolbar'
  }
};
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color'
];

const RichText = memo(() => {
  const [value] = useState('');

  const quillRef = useRef<ReactQuill>(null);

  const handleQuillChange: ReactQuillProps['onChange'] = function (value, delta, source, editor) {
    console.log(value, delta, source, editor, 'editor change');
  };
  const handleQuillFocus: ReactQuillProps['onFocus'] = function (selection, source, editor) {
    console.log(selection, source, editor, 'editor focus');
  };
  const handleQuillSelection: ReactQuillProps['onChangeSelection'] = function (
    selection,
    source,
    editor
  ) {
    console.log(selection, source, editor, 'editor onChangeSelection');
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <ToolBar quillRef={quillRef}></ToolBar>
        <ReactQuill
          ref={quillRef}
          className="flex-1"
          placeholder="test"
          value={value}
          theme={''}
          // modules={modules}
          // formats={formats}
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
