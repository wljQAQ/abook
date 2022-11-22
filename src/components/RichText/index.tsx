/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-22 17:42:23
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText\index.tsx
 */
import ReactQuill from 'react-quill';
import { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

  return (
    <>
      <ToolBar quillRef={quillRef}></ToolBar>
      <ReactQuill
        ref={quillRef}
        className="h-full"
        theme="snow"
        placeholder="111111"
        value={value}
        modules={modules}
        formats={formats}
        onChange={handleQuillChange}
      ></ReactQuill>
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
