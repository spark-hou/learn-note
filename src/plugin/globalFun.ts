/**
 * @author  sparkHou
 * @date 2021-05-30 00:05
 * @Description:
 */
import {chart} from "@/plugin/golbalInterface";

//解决hash route和锚点冲突
export function handleAnchorClick(e: any) {
  if (e.target.nodeName === 'A' && e.target.className.indexOf('ant-anchor-link-title') !== -1) {
    e.preventDefault()
    //拿到hash
    const id = e.target.hash
    document.querySelector(id).scrollIntoView(true)
  }

}

//防抖debounce代码：
export function debounce(fn: any) {
  let timeout: any = null; // 创建一个标记用来存放定时器的返回值
  return (...arg: any) => {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    clearTimeout(timeout);
    // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
    timeout = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, arg);
    }, 500);
  };
}

//节流throttle代码：
export function throttle(fn: any) {
  let canRun = true; // 通过闭包保存一个标记
  return (...arg: any) => {
    // 在函数开头判断标记是否为true，不为true则return
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      // @ts-ignore
      fn.apply(this, arg);
      canRun = true;
    }, 500);
  };
}

/**
 * 销毁echart实例，方便下次重新渲染时获取实例
 * @param chart
 */
export function dropChart(chart: chart) {
  if (chart.value?.dispose) {
    chart.value.dispose()
  }
  chart.value = null
}
