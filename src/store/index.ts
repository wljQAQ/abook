/*
 * @Author: wlj
 * @Date: 2023-04-05 18:00:57
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 19:15:14
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
