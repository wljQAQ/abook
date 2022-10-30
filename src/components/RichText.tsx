/*
 * @Author: wulongjiang
 * @Date: 2022-10-30 12:47:25
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-10-30 19:10:47
 * @Description: 富文本编辑器
 * @FilePath: \blog\src\components\RichText.tsx
 */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { memo } from 'react';

console.log(ReactQuill);
const RichText = memo(() => {
  return (
    <>
      <ReactQuill theme="snow"></ReactQuill>
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
