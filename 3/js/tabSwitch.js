function tanSwitch(menu,content){
  menu.click(function(){
    var idx=$(this).index();
    content.hide();
    content.eq(idx).show();
  })
}

export {tanSwitch};