var date = new Date();
      var hour = date.getHours();
      if (hour>=22 && hour<24) online = "server"; else {
      if (hour>=0 && hour<8) online = "offline"; else {
      if (hour>=8 && hour<15) online = "offline"; else {
      if (hour>=15 && hour<22) online = "offline"; }
   }
}
if (online == "online") { 
  
} else if (online == "server") {
window.location.href = "/server";
} else { 
window.location.href = "/offline"; 
}
