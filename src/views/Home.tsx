/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 16:02:51
 * @Description: 主页面
 */

import { memo, useState } from 'react';
import { useImmer } from 'use-immer';

const Home = memo(() => {
  const [test, setTest] = useState({
    a: '123',
    b: {
      c: '456'
    }
  });

  const [test2, setTest2] = useImmer({
    a: '123',
    b: {
      c: '456'
    }
  });
  return (
    <>
      <div>Home</div>
      <div>{JSON.stringify(test)}</div>
      <div>{JSON.stringify(test2)}</div>
      <button onClick={() => setTest({ ...test, a: '456' })}>click</button>
      <button
        onClick={() =>
          setTest2(draft => {
            draft.a = '456';
          })
        }
      >
        Immerclick
      </button>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
