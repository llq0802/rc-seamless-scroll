import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react';
import { throttle } from 'throttle-debounce';
import { dataWarm } from './utils';
import type{ SeamlessScrollInctance, SeamlessScrollProps } from './SeamlessScrollType';
// import './index.less';

/**
 * 处理requestAnimationFrame兼容问题
 */
globalThis.window.cancelAnimationFrame = (function() {
  return (
    globalThis.window.cancelAnimationFrame ||
    // @ts-ignore
    globalThis.window.webkitCancelAnimationFrame ||
    // @ts-ignore
    globalThis.window.mozCancelAnimationFrame ||
    // @ts-ignore
    globalThis.window.oCancelAnimationFrame ||
    // @ts-ignore
    globalThis.window.msCancelAnimationFrame ||
    function(id) {
      return globalThis.window.clearTimeout(id);
    }
  );
})();
globalThis.window.requestAnimationFrame = (function() {
  return (
    globalThis.window.requestAnimationFrame ||
    // @ts-ignore
    globalThis.window.webkitRequestAnimationFrame ||
    // @ts-ignore
    globalThis.window.mozRequestAnimationFrame ||
    // @ts-ignore
    globalThis.window.oRequestAnimationFrame ||
    // @ts-ignore
    globalThis.window.msRequestAnimationFrame ||
    function(callback) {
      return globalThis.window.setTimeout(callback, 1000 / 60);
    }
  );
})();

/**
 * 无缝滚动组件
 * @param props SeamlessScrollType
 * @param ref ref
 * @returns ReactNode
 */
const ReactSeamlessScroll: ForwardRefRenderFunction<SeamlessScrollInctance, SeamlessScrollProps> = (
  props,
  ref
) => {
  const {
    list = [],
    limitScrollNum = 3,
    hover = false,
    wheel = false,
    isRemUnit = false,
    isAutoScroll = true,
    isWatch = true,
    ease = 'ease-in',
    delay = 0,
    singleWaitTime = 1000,
    direction = 'up',
    singleWidth = 0,
    singleHeight = 0,
    step = 1,
    count = -1,
    children,
    wrapperClassName,
    wrapperHeight,
  } = props;
  const copyNum = new Array(props.copyNum ?? 1).fill(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slotListRef = useRef<HTMLDivElement | null>(null);
  const realBoxRef = useRef<HTMLDivElement | null>(null);
  const realBoxWidth = useRef<number>(0);
  const realBoxHeight = useRef<number>(0);
  const reqFrame = useRef<number | null>(null);
  const singleWaitTimeout = useRef<NodeJS.Timeout | null>(null);
  const [xPosState, setXpos] = useState<number>(0);
  const [yPosState, setYpos] = useState<number>(0);
  const xPos = useRef<number>(xPosState);
  const yPos = useRef<number>(yPosState);
  xPos.current = xPosState;
  yPos.current = yPosState;
  // 记录滚动次数
  const _count = useRef<number>(0);
  // 是否鼠标移入
  const isHover = useRef<boolean>(false);
  // 是否能滚动
  const isScroll = useMemo(() => (list ? list.length >= limitScrollNum : false), [
    limitScrollNum,
    list,
  ]);
  // 真实盒子的样式
  const realBoxStyle = useMemo(() => {
    return {
      width: realBoxWidth.current ? `${realBoxWidth.current}px` : 'auto',
      transform: `translate(${xPosState}px,${yPosState}px)`,
      transition: `all ${
        typeof ease === 'string'
          ? ease
          : 'cubic-bezier(' + ease.x1 + ',' + ease.y1 + ',' + ease.x2 + ',' + ease.y2 + ')'
      } ${delay}ms`,
      overflow: 'hidden',
    };
  }, [delay, ease, xPosState, yPosState]);

  // 是否水平滚动
  const isHorizontal = useMemo<boolean>(() => direction === 'left' || direction === 'right', [
    direction,
  ]);
  // 是否开启鼠标移入事件
  const isHoverStop = useMemo(() => hover && isAutoScroll && isScroll, [
    hover,
    isScroll,
    isAutoScroll,
  ]);

  const floatStyle = useMemo<CSSProperties>(() => {
    return isHorizontal ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' };
  }, [isHorizontal]);

  // 基础字体大小 默认为1px
  const baseFontSize = useMemo<number>(() => {
    return isRemUnit
      ? parseInt(
          globalThis.window.getComputedStyle(globalThis.document.documentElement, null).fontSize
        )
      : 1;
  }, [isRemUnit]);

  // 横向单步大小
  const realSingleStopWidth = useMemo<number>(() => singleWidth * baseFontSize, [
    baseFontSize,
    singleWidth,
  ]);
  // 纵向单步大小
  const realSingleStopHeight = useMemo<number>(() => singleHeight * baseFontSize, [
    singleHeight,
    baseFontSize,
  ]);

  const stepCount = useMemo(() => {
    let singleStep: number;
    let _step = step;
    if (isHorizontal) {
      singleStep = realSingleStopWidth;
    } else {
      singleStep = realSingleStopHeight;
    }
    if (singleStep > 0 && singleStep % _step > 0) {
      console.warn(
        '如果设置了单步滚动，step 需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确。~~~~~'
      );
    }
    return _step;
  }, [isHorizontal, step, realSingleStopHeight, realSingleStopWidth]);

  // 取消滚动
  const cancle = () => {
    cancelAnimationFrame(reqFrame.current as number);
    reqFrame.current = null;
  };

  // 滚动动画
  const animation = (
    _direction: 'up' | 'down' | 'left' | 'right',
    _step: number,
    isWheel?: boolean
  ) => {
    reqFrame.current = requestAnimationFrame(function() {
      // 无缝滚动 因为复制了一份数组所以要除以2
      const h = realBoxHeight.current / 2;
      const w = realBoxWidth.current / 2;

      if (_direction === 'up') {
        if (Math.abs(yPos.current) >= h) {
          setYpos(0);
          _count.current += 1;
        }
        setYpos(item => (item -= _step));
      } else if (_direction === 'down') {
        if (yPos.current >= 0) {
          setXpos(h * -1);
          _count.current += 1;
        }
        setYpos(item => (item += _step));
      } else if (_direction === 'left') {
        if (Math.abs(xPos.current) >= w) {
          setXpos(0);
          _count.current += 1;
        }
        setXpos(item => {
          return (item -= _step);
        });
      } else if (_direction === 'right') {
        if (xPos.current >= 0) {
          setXpos(w * -1);
          _count.current += 1;
        }
        setXpos(item => (item += _step));
      }

      // 当滚轮滑动时不能单步滚动
      if (isWheel) return;

      if (singleWaitTimeout.current) {
        clearTimeout(singleWaitTimeout.current);
      }

      // 单步滚动
      if (!!realSingleStopHeight) {
        if (Math.abs(yPos.current) % realSingleStopHeight === 0) {
          singleWaitTimeout.current = setTimeout(() => {
            move();
          }, singleWaitTime);
        } else {
          move();
        }
      } else if (!!realSingleStopWidth) {
        if (Math.abs(xPos.current) % realSingleStopWidth < _step) {
          singleWaitTimeout.current = setTimeout(() => {
            move();
          }, singleWaitTime);
        } else {
          move();
        }
      } else {
        move();
      }
    });
  };

  const move = () => {
    cancle();
    if (isHover.current || !isScroll || _count.current === count) {
      _count.current = 0;
      return;
    }
    animation(direction as 'up' | 'down' | 'left' | 'right', stepCount, false);
  };

  const initMove = () => {
    dataWarm(list);

    if (isHorizontal) {
      let slotListWidth = (slotListRef.current as HTMLDivElement).offsetWidth;
      slotListWidth = slotListWidth * 2 + 1;
      realBoxWidth.current = slotListWidth;
    }

    if (isScroll) {
      realBoxHeight.current = (realBoxRef.current as HTMLDivElement).offsetHeight;
      if (isAutoScroll) {
        move();
      }
    } else {
      // yPos.current = xPos.current = 0;
      cancle();
      setXpos(0);
      setYpos(0);
    }
  };

  const startMove = () => {
    isHover.current = false;
    move();
  };

  const stopMove = () => {
    isHover.current = true;
    if (singleWaitTimeout.current) {
      clearTimeout(singleWaitTimeout.current);
    }
    cancle();
  };

  const throttleFunc = throttle(30, (e: WheelEvent) => {
    cancle();
    const singleHeight = !!realSingleStopHeight ? realSingleStopHeight : 15;
    if (e.deltaY < 0) {
      animation('down', singleHeight, true);
    }
    if (e.deltaY > 0) {
      animation('up', singleHeight, true);
    }
  });

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    throttleFunc(e);
  };

  const reset = () => {
    cancle();
    isHover.current = false;
    initMove();
  };

  useEffect(() => {
    if (isWatch) {
      reset();
    }
  }, [isWatch]);

  useEffect(() => {
    if (isAutoScroll) {
      startMove();
    } else {
      stopMove();
    }
  }, [isAutoScroll]);

  useEffect(() => {
    if (count !== 0) {
      startMove();
    }
  }, [count]);

  useEffect(() => {
    cancle();
    if (singleWaitTimeout.current) {
      clearTimeout((singleWaitTimeout.current as unknown) as number);
    }
    if (isScroll) {
      initMove();
    }
    return () => {
      stopMove();
    };
  }, []);

  // 提供的方法
  useImperativeHandle(ref, () => ({
    onReset: () => {
      reset();
    },
    onCancel: () => {
      stopMove();
    },
  }));

  const getHtml = () => {
    return (
      <>
        <div ref={slotListRef} style={floatStyle}>
          {children}
        </div>
        {isScroll
          ? copyNum.map((_, i) => {
              return (
                <div key={i} style={floatStyle}>
                  {children}
                </div>
              );
            })
          : null}
      </>
    );
  };

  return (
    <div
      ref={scrollRef}
      className={wrapperClassName}
      style={{
        height: wrapperHeight || realBoxHeight.current / 2,
        overflow: 'hidden',
      }}
    >
      {wheel && hover ? (
        <div
          ref={realBoxRef}
          style={realBoxStyle}
          onMouseEnter={() => {
            if (isHoverStop) {
              stopMove();
            }
          }}
          onMouseLeave={() => {
            if (isHoverStop) {
              startMove();
            }
          }}
          onWheel={e => {
            if (isHoverStop) {
              onWheel(e);
            }
          }}
        >
          {getHtml()}
        </div>
      ) : (
        <div
          ref={realBoxRef}
          style={realBoxStyle}
          onMouseEnter={() => {
            if (isHoverStop) {
              stopMove();
            }
          }}
          onMouseLeave={() => {
            if (isHoverStop) {
              startMove();
            }
          }}
        >
          {getHtml()}
        </div>
      )}
    </div>
  );
};

export default forwardRef(ReactSeamlessScroll);
export type {
  SeamlessScrollInctance, SeamlessScrollProps
}