	var date = new Date();
        var hour = date.getHours();
        if (hour>=5 && hour<12) online = "online"; else {
        if (hour>=12 && hour<18) online = "online"; else {
        if (hour>=18 && hour<24) online = "online"; else {
        if (hour>=0 && hour<5) online = "offline"; }
    }
}
if(online == "offline") { alert("-_-")  }
