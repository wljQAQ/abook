/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-28 10:46:50
 * @Description:
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import { getThemeVariables } from 'antd/dist/theme';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './node_modules')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: getThemeVariables({
        //   // '@primary-color': 'red' // 全局主色
        //   dark: true // 开启暗黑模式
        // })
      }
    }
  }
});
