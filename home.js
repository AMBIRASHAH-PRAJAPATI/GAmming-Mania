console.log("raj");
let opennav = document.getElementById("open-nav");
let navd = document.getElementById("nav-d");
let cross = document.getElementById("cross");
let childElements = navd.children;
let screen = document.querySelectorAll('section');



if (window.matchMedia('(max-width: 600px)').matches) {

  // function to colose navbar by cross and its element and nav icon
  let openclose = () => {
    let navdstyle = window.getComputedStyle(navd);
    if (navdstyle.display ==="none") {
      navd.style.display = 'block';
      opennav.style.display = 'none';
    } else {
      navd.style.display = 'none';
      opennav.style.display = 'block';
    }
  };

  // function to close navbar by any point on screen 
    let openclosebyscreen = () => {
      if (navd.style.display === 'block') {
        navd.style.display = 'none';
        opennav.style.display = 'block';
      }
    };

  opennav.addEventListener('click', openclose);
  cross.addEventListener('click', openclose);
  for (let i = 0; i < childElements.length; i++) {
    childElements[i].addEventListener('click', openclose);
  }
  for (let i = 0; i < screen.length; i++) {
    screen[i].addEventListener('click',openclosebyscreen);
  }
  
}