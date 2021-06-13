var date = new Date(); 
      var hour = date.getUTCHours();
      if (hour>=18 && hour<19) online = "server"; else {
      if (hour>=19 && hour<24) online = "online"; else {
      if (hour>=0 && hour<1) online = "server"; else {
      if (hour>=1&& hour<18) online = "online"; }
   }
}
if (online == "online") { 
}if (online == "offline") { 
window.location.href = "/offline";
} else if (online == "server") {
window.location.href = "/server";
} else {}
