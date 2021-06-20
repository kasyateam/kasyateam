var date = new Date(); 
      var hour = date.getUTCHours();
      if (hour>=18 && hour<19) online = "offline";
      else { if (hour>=19 && hour<24) online = "offline";
      else { if (hour>=0 && hour<1) online = "server";
      else {  if (hour>=1&& hour<18) online = "offline"; 
      }
   }
}
if (online == "online") {
}else if (window.location.pathname == '/offline' && online == 'offline'){
}else if (window.location.pathname == '/server' && online == 'server'){
}else if (window.location.pathname == '/server-tick' && online == 'server'){
}else if (online == "offline") {
window.location.href = "/offline";
}else if (online == "server") {
window.location.href = "/server";
} else {
window.location.href = "/error";
}
