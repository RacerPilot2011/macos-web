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
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function showAll(){
    const menubar = document.getElementById('menus');
    const dock = document.getElementById('dock');
    menubar.style.opacity = '1';
    dock.style.opacity = '1';
}

function encrypt(text) {
    const numberMapping = {
        '0': 'X1', '1': 'A2', '2': 'B3', '3': 'C4', 
        '4': 'D5', '5': 'E6', '6': 'F7', '7': 'G8', 
        '8': 'H9', '9': 'I0'
    };

    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Encrypt digits
        if (char >= '0' && char <= '9') {
            result += numberMapping[char];
        } 
        // Encrypt uppercase letters
        else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode((char.charCodeAt() - 65 + 3) % 26 + 65);
        } 
        // Encrypt lowercase letters
        else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode((char.charCodeAt(0) - 97 + 3) % 26 + 97);
        } else {
            // Non-alphanumeric characters remain the same
            result += char;
        }
    }
    return result;
}


function checkCookie() {
  let user = getCookie("user");
  let code = getCookie("Access");
  let codetrue =  getCookie("codeTrue");
  let signUp = getCookie("signUp");
  if (signUp == ""){
    let user = document.forms["activationForm"]["username"].value;
        setCookie("user", user);
       num = getRandomInt(100000000000);
       setCookie("Access", num);
       encrytedCode = encrypt(num.toString());
       setCookie("codeTrue", "false");
       console.log(encrytedCode);
       alert("Thanks! Email a TDB Stuiods member this code: " + encrytedCode + " to get your access code to acess this website.");
       setCookie("signUp", "true");
  } else {
      window.location.replace("https://macos-test-10965564.codehs.me/entercode.html");
  }
}