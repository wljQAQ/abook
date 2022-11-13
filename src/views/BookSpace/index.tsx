/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-13 17:40:34
 * @Description:新建一个知识库页面
 * @FilePath: \blog\src\views\BookSpace\index.tsx
 */
import { memo } from 'react';
import BookDetail from './children/Detail';
// const bgMap = import.meta.glob('../../assets/img/background/*.jpg');
// let bgArr = [];

// for (const key in bgMap) {
//   if (Object.prototype.hasOwnProperty.call(bgMap, key)) {
//     bgArr.push(bgMap[key]);
//   }
// }

// console.log(bgArr);

const BookSpace = memo(() => {
  // const bgImgIndex = Math.ceil(Math.random() * 7);
  console
    .log
    // bgArr[bgImgIndex]().then(res => {
    //   console.log(res);
    // })
    // bgArr[bgImgIndex]().then(res => {
    //   console.log(res);
    // }),
    // bgArr
    ();
  return (
    <div className="flex w-full h-full">
      {/* <img src={lazy(() => bgArr[bgImgIndex])} alt="" /> */}
      <div className="h-full">
        <BookDetail></BookDetail>
      </div>
    </div>
  );
});

BookSpace.displayName = 'BookSpace';

export default BookSpace;
