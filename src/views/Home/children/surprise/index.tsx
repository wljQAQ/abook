/*
 * @Author: wulongjiang
 * @Date: 2022-11-12 13:18:07
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-15 08:18:19
 * @Description:中分彩蛋
 * @FilePath: \blog\src\views\Home\children\surprise\index.tsx
 */
import { memo, useEffect, RefObject, useState, useRef } from 'react';
import cxk from '@/assets/img/cxk.png';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
interface Properties {
  el: RefObject<HTMLElement>;
}

const Surprise = memo(({ el }: Properties) => {
  const [surprizeVisible, setSurprizeVisible] = useState(false);
  const imgRef = useRef(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);

  function onExited() {
    setOverlayVisible(false);
  }

  function handleKey(e: KeyboardEvent) {
    if (surprizeVisible === true) return;
    if (e.key === 'Control') {
      setSurprizeVisible(true);
      setOverlayVisible(true);
    }
  }

  useEffect(() => {
    if (el.current) {
      const top = el.current.getBoundingClientRect().top;
      const left = el.current.getBoundingClientRect().left;
      setTop(top);
      setLeft(left);
      window.addEventListener('keyup', handleKey);
    }
  }, [el]);

  return (
    <div
      className={classNames({
        'fixed top-0 left-0 w-screen h-screen  opacity-80 bg-black': overlayVisible
      })}
    >
      <CSSTransition
        nodeRef={imgRef}
        timeout={3000}
        in={surprizeVisible}
        onEntered={onExited}
        classNames={{
          enter: 'surprise-checked-enter',
          enterActive: 'surprise-checked-enter-active'
        }}
      >
        <div
          ref={imgRef}
          className="absolute"
          style={{ top: `${top - 5}px`, left: `${left + 7}px` }}
        >
          {surprizeVisible && <img className="w-6 object-contain" src={cxk} />}
        </div>
      </CSSTransition>
    </div>
  );
});

Surprise.displayName = 'Surprise';

export default Surprise;
