/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-15 08:18:46
 * @Description:新建一个知识库页面
 * @FilePath: \blog\src\views\BookSpace\index.tsx
 */
import { memo } from 'react';
import BookDetail from './children/Detail';



const BookSpace = memo(() => {
  return (
    <div className="flex w-full h-full  bg-no-repeat bg-cover">
      <div className="h-full">
        <BookDetail></BookDetail>
      </div>
    </div>
  );
});

BookSpace.displayName = 'BookSpace';

export default BookSpace;
