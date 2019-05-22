import {randomColor} from './randomColor.js'

import {addWidth} from './addWidth.js'


// 获取元素
var box1=document.getElementById('box1');
var box2=document.getElementById('box2');
var box3=document.getElementById('box3');

// 第一块
randomColor(box1,500)

// 第二块
addWidth(box2,2,500)

// 第三块
addWidth(box3,2,500)
randomColor(box3,500)