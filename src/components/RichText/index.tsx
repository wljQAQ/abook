/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-20 20:57:15
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText\index.tsx
 */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { memo, useState } from 'react';
import ToolBar from '@/components/RichText/children/ToolBar';

const RichText = memo(() => {
  const [value, setValue] = useState('');

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
  return (
    <>
      <ToolBar></ToolBar>
      <ReactQuill
        className="h-full"
        theme="snow"
        placeholder="111111"
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue}
      ></ReactQuill>
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
