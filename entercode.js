function setCookie(cname,cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function redirectToDesktop(){
    windows.location.replace("https://macos-test-10965564.codehs.me/index.html/");
}
function checkCookie() {
  let code = getCookie("Access");
  var newLogin = getCookie("newLogin");
    let enteredcode = document.forms["enterForm"]["enter"].value;
    
    if(enteredcode == code){
        setCookie("newLogin", "true");
        alert("Activation Successful. Enjoy Your Experience!");
        redirectToDesktop();
  } else {
        alert("Invaild Code. Please reload and try again.");
  }
}