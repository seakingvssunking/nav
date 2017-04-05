//获取当前执行的JS文件链接后面的参数

function getParameter(name){
  var usl = document.currentScript.src.split("?");
  if(usl.length==1) return;
  var str = usl[1].split("&");
  for(var i=0;i<str.length;i++){
    if(str[i].split("=")[0]==name){
      return str[i].split("=")[1];
    }
  }
  return "";
}
