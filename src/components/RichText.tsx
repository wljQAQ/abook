/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-15 22:46:05
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText.tsx
 */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { memo, useState } from 'react';

const RichText = memo(() => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      className="h-full"
      theme="snow"
      placeholder="111111"
      value={value}
      onChange={setValue}
    ></ReactQuill>
  );
});

RichText.displayName = 'RichText';

export default RichText;
