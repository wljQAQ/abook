/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-15 22:18:06
 * @Description:新建一个知识库页面
 * @FilePath: \blog\src\views\BookSpace\index.tsx
 */
import { memo } from 'react';
import BookContent from './children/BookContent';
import BookDetail from './children/BookDetail';

const BookSpace = memo(() => {
  return (
    <div className="flex w-full h-full">
      <div className="h-full px-4 pt-2 w-60 bg-white shadow-xl">
        <BookDetail></BookDetail>
      </div>
      <div className="h-full flex-1 pt-16 bg-bg-main bg-no-repeat bg-cover">
        <BookContent></BookContent>
      </div>
    </div>
  );
});

BookSpace.displayName = 'BookSpace';

export default BookSpace;
