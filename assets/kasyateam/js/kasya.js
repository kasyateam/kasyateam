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
