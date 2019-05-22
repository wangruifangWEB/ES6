// 随机变化颜色模块

function randomColor(obj,speed){
  setInterval(function(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    obj.style.background='rgb('+r+','+g+','+b+')';
  },speed)
}

export {randomColor};