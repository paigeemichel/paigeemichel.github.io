// Save user's theme choice
let btn = document.querySelector('#theme'); .addEventListener('click', theme);

function theme() {
    setTheme("light");
}
// save users theme choice
function setTheme(theme) {
    if(theme=="dark"){
        theme = "light";
    } else {
        theme = "dark";
    }
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
});
// toggle button and navigation// 
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'
    navToggle.setAttribute('aria-expanded', !isExpanded)
    navMenu.classList.toggle('show');
});

// connect event section so can set up color change//
  
const section1 = document.querySelector('.section1');
let colorChanged = false;

// finds the key pressed and changes color//
document.addEventListener('keydown', (event)=> {
  if (event.key.toLowerCase() === 'c') {
    section1.style.backgroundColor = colorChanged ? 'pink' : 'lightgreen';
    colorChanged = !colorChanged;
  }
});

// to do : part 1, finish part 2, //