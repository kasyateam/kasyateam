var date = new Date();
        var hour = date.getHours();
        if (hour>=0 && hour<7) online = "offline"; else {
        if (hour>=6 && hour<8) online = "teh"; else {
        if (hour>=8 && hour<15) online = "online"; else {
        if (hour>=15 && hour<24) online = "online"; }
    }
}
if (online == "offline") {
window.location.href = "/offline";
} else if (online == "teh") {
window.location.href = "/server";
} else { 
window.location.href = "/error";
}
