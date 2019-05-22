/*
  注意：
  1.指定所導入的模塊的時候需要添加 ./
  2.模塊中用export直接導出的內容需要，接收的時候需要寫在花括號里，並且名稱需要和導出的一致
 */
import {r as f,monkey,square} from './b.js';
// as重命名 可以给接收到、导出的数据均可重命名

console.log(f,monkey);

var result=square(3);
console.log(result);



// 接收export default导出的数据不需要加{}，只需随便取名接收即可





