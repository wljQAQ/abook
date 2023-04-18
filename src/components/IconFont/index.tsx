/*
 * @Author: wlj
 * @Date: 2023-04-09 10:55:45
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-18 08:58:45
 * @Description:icon font svg
 */
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_4004180_dhjl8k7t0um.js'],
});

interface Props {
  type: string;
  color?: string;
  size?: number;
}

export default function index({ type, color, size }: Props) {
  return <IconFont type={type} style={{ color, fontSize: size + 'px' }} />;
}
