/*
 * @Author: wulongjiang
 * @Date: 2022-11-13 16:53:21
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-15 22:46:14
 * @Description:
 * @FilePath: \blog\src\views\BookSpace\children\BookContent\index.tsx
 */
import { memo } from 'react';
import RichText from '@/components/RichText';

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
