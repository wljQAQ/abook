/*
 * @Author: wlj
 * @Date: 2023-04-05 19:11:00
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 22:51:29
 * @Description:
 */
import { createSlice } from '@reduxjs/toolkit';

export interface userState {
  userInfo: {
    id: number;
    name: string;
  };
}

const initialState: userState = {
  userInfo: {
    id: 0,
    name: '请登录',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
