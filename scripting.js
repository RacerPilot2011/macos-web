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

var currentUrl = window.location.href;
console.log(currentUrl);
let afterremove = currentUrl.replace('/index.html', '')
console.log(afterremove);
function detectNewLogin(){
    console.log("detecting login");
    var codeTrue = getCookie("codeTrue");
    var newLogin = getCookie("newLogin");
    let user = getCookie("user");
    if (newLogin != ""){
        console.log("existing");
    } else {
        console.log("replacing window to activate");
        window.location.replace(afterremove + '/activatemac.html');
    }
}
function playStartupSound(){
    var x = document.getElementById("startUp"); 
    x.play();
}
//detectNewLogin();
let user = getCookie("user");
var welcome = "\n\n\nWelcome Back " + user + "!";
document.getElementById("welcome").innerText = welcome;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(2000).then(() => { fadeout(); });
function fadeout(){ 
            setInterval(hide, 10); 
        } 
    function hide(){ 
        var body=document.getElementById("loading"); 
        opacity = 
    Number(window.getComputedStyle(body).getPropertyValue("opacity")) 
      
            if(opacity>0){ 
                opacity=opacity-0.1; 
                        body.style.opacity=opacity ;
                        
                console.log("fading")
            } else{
                var x = document.getElementById("startUp"); 
                x.play();
            }
    }
let icons = document.querySelectorAll(".ico");
let length = icons.length;
const appTop = document.getElementById('appTop')
const about = document.getElementById('about')
const content = document.getElementById('content')
var fullscreen = false;

appTop.innerText = 'Finder'
appTop.style.fontWeight = 'bold';
icons.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    openModal(e.target);
  });
  item.addEventListener("mouseover", (e) => {
    focus(e.target, index);
  });
  item.addEventListener("mouseleave", (e) => {
    icons.forEach((item) => {
      item.style.transform = "scale(1)  translateY(0px)";
    });
  });
});

// Modal functionality
// Get modal elements
const modal = document.getElementById('modal');
const modalHeader = modal.querySelector('.modal-header');
const closeBtn = modal.querySelector('.close');
const modalTitle = modalHeader.querySelector('h2');
const fullscreenBtn = modal.querySelector('.fullscreen')

// Function to show modal
function openModal(title) {
  modalTitle.textContent = title; // Set the title dynamically
  modal.style.display = 'block';
  appTop.innerText = title;
  about.innerText = "About " + title;
}
//Fullscreen modal
fullscreenBtn.onclick = function () {
  if (fullscreen == false){
  modal.style.width = '100%';
  modal.style.height = '100%';
  fullscreen = true;
  } else {
  modal.style.width = '400px';
  modal.style.height = '300px';
  fullscreen = false;
  }
}
// Close modal
closeBtn.onclick = function () {
  appTop.innerText = 'Finder';
  modal.style.display = 'none';
  about.innerText = "About Finder";
} 

// Make the modal draggable
modalHeader.onmousedown = function (event) {
  let shiftX = event.clientX - modal.getBoundingClientRect().left;
  let shiftY = event.clientY - modal.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    modal.style.left = pageX - shiftX + 'px';
    modal.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    modalHeader.onmouseup = null;
  };
};

// Make sure the modal doesn't get stuck on a drag
modalHeader.ondragstart = function () {
  return false;
};
// Make the modal draggable
modalHeader.onmousedown = function(event) {
  let shiftX = event.clientX - modal.getBoundingClientRect().left;
  let shiftY = event.clientY - modal.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    modal.style.left = pageX - shiftX + 'px';
    modal.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null; // Clean up
  };
};

// Prevent dragging issues
modalHeader.ondragstart = function() {
  return false; // Prevent default drag behavior
};

// Function to open the modal
function openModal(title, url) {
  modalTitle.textContent = title; // Set the title dynamically
  modal.style.display = 'block'; // Show modal
  appTop.innerText = title;
  about.innerText = "About " + title;
    const iframe = document.getElementById('myIframe');
    iframe.src = url; // Set the iframe URL
  // Set modal position to center
  const { innerWidth, innerHeight } = window;
  modal.style.left = `${(innerWidth - modal.offsetWidth) / 2}px`;
  modal.style.top = `${(innerHeight - modal.offsetHeight) / 2}px`;
}

// Close modal functionality
closeBtn.onclick = function() {
  appTop.innerText = 'Finder';
  modal.style.display = 'none'; // Hide modal
  about.innerText = "About Finder";
};
// Add event listeners to dock icons to open the modal
let dockIcons = document.querySelectorAll('.dock-item');
dockIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    // Check the class of the clicked icon
    if (this.classList.contains('li-1')) {
      openModal('Finder', ''); // Set the title to "Finder"
    } else if (this.classList.contains('li-2')) {
      openModal('Chrome', 'https://if-you-block-this-u-are-not-intelligent.it.com/ta'); // Set the title to "Google Chrome"
    } else if (this.classList.contains('li-3')) {
      openModal('Photoshop', 'https://photopea.com');
    } else if (this.classList.contains('li-4')) { 
      openModal('Unblocked Stuff', 'https://docs.google.com/document/d/1u1PvZM6dA5gQ27lNvOM-ZWso5jKAi4x2Cizzd9QDjGY/edit?usp=sharing')
    } else if (this.classList.contains('li-5')) {
      openModal('Calculator', '/calculator.html'); 
    } else if (this.classList.contains('li-6')) {
      openModal('VSCode', ''); 
    } else if (this.classList.contains('li-7')) {
      openModal('Clock', '/clock.html'); 
    } else if (this.classList.contains('li-8')) {
      openModal('Wallpapers', ''); 
    } else if (this.classList.contains('li-9')) {
      openModal('Calender', ''); 
    } else if (this.classList.contains('li-10')) {
      openModal('FaceTime', ''); 
    } else if (this.classList.contains('li-11')) {
      openModal('App Store', ''); 
    } else if (this.classList.contains('li-bin')) {
      openModal('Trash', "trash.html");
    };
  });
});
window.onclick = function(event) {
        const modal = document.getElementById('myModal');
        if (event.target === modal) {
            closeModal();
        }
    }

// Remaining JavaScript code...

// Function to update the time every second
function updateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  document.getElementById('date').innerText = date;
  document.getElementById('time').innerText = time;
}

// Update time every second
setInterval(updateTime, 100);
updateTime(); // Initial call to set the time immediately on load

// Functionality for menu dropdowns
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  const button = item.querySelector('.menu-button');
  const submenu = item.querySelector('.submenu');

  // Show submenuaf on mouse enter
  button.addEventListener('mouseenter', () => {
    submenu.style.display = 'inline-grid'; // Show submenu
  });

  // Hide submenu on mouse leave
  item.addEventListener('mouseleave', () => {
    submenu.style.display = 'none'; // Hide submenu
  });

  submenu.addEventListener('mouseleave', () => {
    submenu.style.display = 'none'; // Hide submenu when mouse leaves
  });
  
  submenu.addEventListener('click', () => {
     openModal('About', '/about.html');
  })
});
