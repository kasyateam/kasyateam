var date = new Date();
        var hour = date.getHours();
        if (hour>=7 && hour<9) online = "online"; else {
        if (hour>=9 && hour<15) online = "online"; else {
        if (hour>=15 && hour<24) online = "online"; else {
        if (hour>=0 && hour<7) online = "offline"; }
    }
}
if (online == "offline") {
window.location.href = "/offline";
} else if (online == "1") {
window.location.href = "/server";
} else { }
