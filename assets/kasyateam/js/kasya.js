var date = new Date();
      var hour = date.getHours();
      if (hour>=22 && hour<24) online = "online"; else {
      if (hour>=0 && hour<8) online = "online"; else {
      if (hour>=8 && hour<15) online = "online"; else {
      if (hour>=15 && hour<22) online = "online"; }
   }
}
if (online == "offline") { 
window.location.href = "/offline"; 
} else if (online == "server") {
window.location.href = "/server";
} else { }
