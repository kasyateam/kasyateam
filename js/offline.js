var date = new Date();
        var hour = date.getHours();
        if (hour>=7 && hour<14) online = "2"; else {
        if (hour>=14 && hour<15) online = "2"; else {
        if (hour>=0 && hour<1) online = "2"; else {
        if (hour>=1 && hour<7) online = "2"; }
    }
}
if(online == "0") { 
alert("Отказан блок D"); } 
if else (online == "1") { alert("Отказан блок R");}
else { window.location.href = "/error";}


