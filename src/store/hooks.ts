/*
 * @Author: wlj
 * @Date: 2023-04-05 19:20:41
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-05 19:21:01
 * @Description: 
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
