/*
 * @Author: wulongjiang
 * @Date: 2022-11-20 21:20:03
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-20 22:02:24
 * @Description:
 * @FilePath: \blog\src\components\RichText\children\ToolBarBtn.tsx
 */
import { memo, ReactNode } from 'react';
import { Tooltip, Button } from 'antd';

interface Properties {
  icon?: ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const ToolBarBtn = memo(({ icon, children, className }: Properties) => {
  return (
    <Tooltip placement="bottom" title="正文与标题" arrowPointAtCenter>
      <Button
        className={
          className + ' !w-auto !h-auto !px-2 !py-1 shadow-none hover:!bg-gray-100 !text-black'
        }
      >
        {children}
        <span className="pl-2 text-gray-500">{icon}</span>
      </Button>
    </Tooltip>
  );
});

export default ToolBarBtn;
