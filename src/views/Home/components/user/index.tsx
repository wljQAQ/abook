/*
 * @Author: wlj
 * @Date: 2022-10-31 15:07:12
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 22:59:43
 * @Description:
 */
import { memo, useRef } from 'react';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useAppSelector } from '@/store/hooks';

import Surprise from '../surprise';

import avatar from '@/assets/img/avatar.jpg';

const User = memo(() => {
  const userInfo = useAppSelector(state => state.user.userInfo);

  const avatarRef = useRef<HTMLElement>(null);
  return (
    <div className="px-4 py-3">
      <Avatar ref={avatarRef} src={avatar} size={40} icon={<UserOutlined />} />
      <span className="pl-2 font-bold">{userInfo.name}</span>
      <Surprise el={avatarRef}></Surprise>
    </div>
  );
});

User.displayName = 'User';

export default User;
