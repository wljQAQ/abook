/*
 * @Author: wulongjiang
 * @Date: 2022-11-13 16:53:21
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-03-16 21:08:17
 * @Description:
 * @FilePath: \abook\src\views\BookSpace\components\BookContent\index.tsx
 */
import { memo } from 'react';
import RichText from './components/RichText';

const BookContent = memo(() => {
  return (
    <>
      <div className="w-4/5 m-auto bg-white  h-[calc(100vh-64px)]">
        <RichText></RichText>
      </div>
    </>
  );
});

BookContent.displayName = 'BookContent';

export default BookContent;
