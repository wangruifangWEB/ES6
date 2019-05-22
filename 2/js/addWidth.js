// 
function addWidth(obj,diff,speed){ //定义diff每次变宽的变化量
  setInterval(function(){
    var oldWidth=obj.offsetWidth;
    obj.style.width=diff+oldWidth + 'px'
  },speed)
}

export {addWidth};