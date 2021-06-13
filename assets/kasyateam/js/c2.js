function getCookie(name) {
 var matches = document.cookie.match(new RegExp(
  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
 ));
 return matches ? decodeURIComponent(matches[1]) : undefined;
}

'use strict ';

function User(url, kurl) {
 this.url = url;
 this.kurl = "localhost:7700";
}

let UserProxy = new Proxy(User, {
 construct: function(target, argumentsList) {
  return new target(...argumentsList);
 }
});

let user = new UserProxy(location.host, "kasyateam.github.io");
if (user.url != user.kurl) {
 alert("!=")
} else {

}