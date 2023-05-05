/*
 * @Author: wlj
 * @Date: 2023-04-09 10:55:45
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-01 17:00:36
 * @Description:icon font svg
 */
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_4004180_ubldk3o3ndc.js'],
});

interface Props {
  type: string;
  color?: string;
  size?: number;
  className?: string;
}

export default function index({ type, color, size, className }: Props) {
  return <IconFont type={type} style={{ color, fontSize: size + 'px' }} className={className} />;
}
