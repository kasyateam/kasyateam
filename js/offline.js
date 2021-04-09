var date = new Date();
        var hour = date.getHours();
        if (hour>=7 && hour<14) online = "0"; else {
        if (hour>=14 && hour<15) online = "0"; else {
        if (hour>=0 && hour<1) online = "0"; else {
        if (hour>=1 && hour<7) online = "0"; }
    }
}
if(online == "0") { 
window.location.href = "/offline"; alert("В серверной комнате произошёл сбой. Работа сервера не доступна.")  } else { }

