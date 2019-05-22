// b模块

// 第一种数据导出方式

// export var rf="大气";


// 第二种数据导出方式
var rf="大气";
var monkey='猴子';



// 计算平方
function square(x){
  return x*x;
}

// as重命名
export {rf as r,monkey,square};


// export default在一个模块中只能用一次，表示导出一个匿名变量，其他模块接收的时候需要对这个模块重新进行命名
