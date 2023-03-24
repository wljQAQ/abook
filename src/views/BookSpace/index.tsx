/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wlj
 * @LastEditTime: 2023-03-24 17:42:07
 * @Description:新建一个知识库页面
 * @FilePath: \abook\src\views\BookSpace\index.tsx
 */
import BookContent from './components/BookContent';
import BookDetail from './components/BookDetail';

const BookSpace = () => {
  return (
    <div className="flex w-full h-full">
      <div className="h-full px-4 pt-2 w-60 bg-white shadow-xl">
        <BookDetail></BookDetail>
      </div>
      <div className="h-full flex-1 pt-16 bg-no-repeat bg-cover">
        {/* <BookContent></BookContent> */}
        111
      </div>
    </div>
  );
};

BookSpace.displayName = 'BookSpace';

export default BookSpace;
