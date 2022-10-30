/*
 * @Author: wlj
 * @Date: 2022-10-21 09:46:53
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-10-30 19:13:16
 * @Description: 主页面
 */

import { querySongs } from '@/http/api/service';
import { memo } from 'react';
import { Button } from 'antd';
import RichText from '@/components/RichText';

const Home = memo(() => {
  async function _querySongs() {
    const { code, result } = await querySongs({ keywords: 'test' });
    console.log(code, result);
  }
  return (
    <>
      <Button onClick={() => _querySongs()}>搜索歌曲</Button>
      <RichText></RichText>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
