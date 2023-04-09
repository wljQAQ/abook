/*
 * @Author: wlj
 * @Date: 2023-04-09 10:55:45
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-09 11:10:59
 * @Description:icon font svg
 */
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_4004180_o2xtl35epy.js'],
});

interface Props {
  type: string;
  color?: string;
  size?: number;
}

export default function index({ type, color, size }: Props) {
  return <IconFont type={type} style={{ color, fontSize: size + 'px' }} />;
}
