/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-31 11:17:31
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText.tsx
 */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { memo, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

const RichText = memo(() => {
  const [value, setValue] = useState('');

  return (
    <>
      <ReactQuill theme="snow" placeholder="111111" value={value} onChange={setValue}></ReactQuill>
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
