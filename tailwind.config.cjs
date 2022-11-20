/*
 * @Author: wlj
 * @Date: 2022-10-31 15:37:23
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-20 20:22:34
 * @Description:
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('./src/assets/img/background/bg_main.jpg')"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  }
};
