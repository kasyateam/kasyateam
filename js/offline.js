var date = new Date();
        var hour = date.getHours();
        if (hour>=7 && hour<14) online = "online"; else {
        if (hour>=14 && hour<15) online = "online"; else {
        if (hour>=0 && hour<1) online = "teh"; else {
        if (hour>=1 && hour<7) online = "offline"; }
    }
}
if(online == "offline") { 
window.location.href = "/offline"; } 
else if ( online == "teh") { window.location.href = "/server";}
else {  }
