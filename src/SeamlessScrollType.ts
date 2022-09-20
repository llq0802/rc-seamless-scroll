import { ReactNode } from 'react';
export declare type EaseType =
  | {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }
  | string;
export declare interface SeamlessScrollInstance {
  onReset(): void;
  onCancel(): void;
}
export declare interface SeamlessScrollProps {
  /**是否开启自动滚动 */
  isAutoScroll: boolean;
  /**原始数据列表 */
  list: Record<string, any>[];
  /**步进速度，step也是单步大小的约数 */
  step: number;
  /**开启滚动的数据大小 默认3*/
  limitScrollNum: number;
  /**是否开启鼠标悬停 */
  hover: boolean;
  /**控制滚动方向 */
  direction: 'up' | 'down' | 'left' | 'right';
  /**单步运动停止的高度(每一项的高度) */
  singleHeight: number;
  /**单步运动停止的宽度 每一项的宽度)*/
  singleWidth: number;
  /**单步停止等待时间 (默认值 1000ms) */
  singleWaitTime: number;
  /**是否开启 rem 单位 */
  isRemUnit: boolean;
  /**开启数据更新监听 */
  isWatch: boolean;
  /**动画延迟时间 */
  delay: number;
  /**动画方式 */
  ease: EaseType;
  /**动画循环次数，默认-1表示一直动画 0表示不循环*/
  count: number;
  /**拷贝几份滚动列表 */
  copyNum: number;
  /**开启鼠标悬停时支持滚轮滚动 */
  wheel: boolean;
  /**滚动盒子的类名 */
  wrapperClassName: string;
  /**滚动盒子的高度 */
  wrapperHeight: number;
  /**列表节点 */
  children: ReactNode;
}
