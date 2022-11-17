/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-17 16:55:22
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText.tsx
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
