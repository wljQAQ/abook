/*
 * @Author: wlj
 * @Date: 2023-04-05 19:11:00
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-08 16:54:34
 * @Description:
 */
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  userInfo: {
    id: number;
    name: string;
  };
}

const initialState: UserState = {
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
