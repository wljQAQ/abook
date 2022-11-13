/*
 * @Author: wlj
 * @Date: 2022-10-31 15:07:12
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-12 15:25:50
 * @Description:
 */
import { Avatar } from 'antd';
import { memo, useRef, MutableRefObject } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Surprise from '../surprise';

import avatar from '@/assets/img/avatar.jpg';

const User = memo(() => {
  const avatarRef = useRef<HTMLElement>(null);
  return (
    <div className="px-4 py-3">
      <Avatar ref={avatarRef} src={avatar} size={40} icon={<UserOutlined />} />
      <span className="pl-2 font-bold">花开富贵</span>
      <Surprise el={avatarRef}></Surprise>
    </div>
  );
});

User.displayName = 'User';

export default User;
