
// import './index.less';
import type { SeamlessScrollInstance, SeamlessScrollProps } from './SeamlessScrollType';
import  SeamlessScroll from './SeamlessScroll';

/**
 * 处理requestAnimationFrame兼容问题
 */
globalThis.window.cancelAnimationFrame = (function () {
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
    function (id) {
      return globalThis.window.clearTimeout(id);
    }
  );
})();
globalThis.window.requestAnimationFrame = (function () {
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
    function (callback) {
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

export type {
  SeamlessScrollInstance, SeamlessScrollProps
}

export default SeamlessScroll