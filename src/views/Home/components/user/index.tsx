/*
 * @Author: wlj
 * @Date: 2022-10-31 15:07:12
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-31 16:09:33
 * @Description:
 */
import { Avatar } from 'antd';
import { memo } from 'react';
import { UserOutlined } from '@ant-design/icons';
import avatar from '@/assets/img/avatar.jpg';

const User = memo(() => {
  return (
    <div className="px-4 py-3">
      <Avatar src={avatar} size={40} icon={<UserOutlined />} />
      <span className="pl-2 font-bold">花开富贵</span>
    </div>
  );
});

User.displayName = 'User';

export default User;
