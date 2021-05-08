var date = new Date();
      var hour = date.getHours();
      if (hour>=10 && hour<24) online = "online"; else {
      if (hour>=0 && hour<1) online = "online"; else {
      if (hour>=1 && hour<6) online = "online"; else {
      if (hour>=6 && hour<10) online = "online"; }
   }
}
if (online == "offline") { 
window.location.href = "/offline"; 
} else if (online == "server") {
window.location.href = "/server";
} else { }

var message="Нам не нравится, что вы хотите сделать...";
function clickIE4(){
if (event.button==2){
alert(message);
return false;
}
}
function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}
document.oncontextmenu=new Function("alert(message);return false")
