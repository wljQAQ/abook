/*
 * @Author: wlj
 * @Date: 2022-11-01 11:22:12
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-18 08:30:33
 * @Description: books组件的switch按钮
 */
import { memo, ReactNode, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

interface Properties {
  checkedChildren: string | ReactNode;
  unCheckedChildreb: string | ReactNode;
  onChange?: (value?: boolean) => void;
}

const Switch = memo(({ checkedChildren, unCheckedChildreb, onChange }: Properties) => {
  const [value, setValue] = useState(true);
  const checkedRef = useRef(null);
  const unCheckedRef = useRef(null);

  function handleChnage() {
    setValue(!value);
  }
  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);
  return (
    <div
      className="inline-flex  bg-gray-100 rounded-md cursor-pointer"
      onClick={() => handleChnage()}
    >
      {/* checked */}
      <CSSTransition nodeRef={checkedRef} in={value} timeout={200} classNames="switch-checked">
        <div
          ref={checkedRef}
          className={classNames(
            'rounded-md px-2 py-1 my-0.5 ml-1 flex-center text-sm',
            {
              'bg-white shadow': value,
            },
            {
              'text-gray-300': !value,
            },
          )}
        >
          {checkedChildren}
        </div>
      </CSSTransition>
      {/* unchecked */}
      <CSSTransition nodeRef={unCheckedRef} in={!value} timeout={200} classNames="switch-unChecked">
        <div
          ref={unCheckedRef}
          className={classNames(
            'rounded-md px-2 py-1 mr-1 my-0.5 flex-center text-sm',
            {
              'bg-white shadow ': !value,
            },
            {
              'text-gray-300': value,
            },
          )}
        >
          {unCheckedChildreb}
        </div>
      </CSSTransition>
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
