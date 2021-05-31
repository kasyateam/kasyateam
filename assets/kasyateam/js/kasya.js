var date = new Date();
      var hour = date.getHours();
      if (hour>=10 && hour<24) online = "online"; else {
      if (hour>=0 && hour<1) online = "server"; else {
      if (hour>=1 && hour<6) online = "server"; else {
      if (hour>=6 && hour<10) online = "server"; }
   }
}
if (online == "online") { 
}if (online == "offline") { 
window.location.href = "/offline"; 
} else if (online == "server") {
window.location.href = "/server";
} else { }

var firebaseConfig = {
    apiKey: "AIzaSyDmrgeFdn0sqArB_8Hbj0gWBtY29sFv_SQ",
    authDomain: "kasya-team.firebaseapp.com",
    databaseURL: "https://kasya-team-default-rtdb.firebaseio.com",
    projectId: "kasya-team",
    storageBucket: "kasya-team.appspot.com",
    messagingSenderId: "472136088940",
    appId: "1:472136088940:web:744883ac4f6cdd38df8749",
    measurementId: "G-6GPCTH5KFC"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var message="Зачем вы это делаете?";
function clickIE4(){
if (event.button==2){
window.location.href = "/sky";
return false;
}
}
function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
window.location.href = "/sky";;
return false;
}
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
 }
 document.oncontextmenu=new Function("window.location.href = '/sky';return false")
