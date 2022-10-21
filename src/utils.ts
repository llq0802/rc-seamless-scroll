export function dataWarm(list: Record<string, any>[]) {
  if (list && typeof list !== 'boolean' && list.length >= 400) {
    console.warn(`数据达到了${list.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`);
  }
}
