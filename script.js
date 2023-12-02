document.addEventListener("DOMContentLoaded", function () {
  // Get the GitHub link element by its ID
  var githubLink = document.getElementById("github-link");

  // Add a click event listener to the GitHub link
  githubLink.addEventListener("click", function () {
    // Replace 'https://github.com/your-username' with your actual GitHub profile URL
    window.location.href = "https://github.com/Brainstorm786";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the GitHub link element by its ID
  var linkedin = document.getElementById("linkedin-link");

  // Add a click event listener to the GitHub link
  linkedin.addEventListener("click", function () {
    // Replace 'https://github.com/your-username' with your actual GitHub profile URL
    window.location.href = "https://www.linkedin.com/in/aman-shaikh-90b8b9227/";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the GitHub link element by its ID
  var instagram = document.getElementById("instagram-link");

  // Add a click event listener to the GitHub link
  instagram.addEventListener("click", function () {
    // Replace 'https://github.com/your-username' with your actual GitHub profile URL
    window.location.href = "https://instagram.com/amanshaikh7646?igshid=NGVhN2U2NjQ0Yg==";
  });
});
      // toggle icon navbar
    let  menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    menuIcon.onclick = () => {
       menuIcon.classList.toggle('bx-x');
       navbar.classList.toggle('active');
     };


  //  scroll section active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         
      });
    };
  });
  // sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

          // remove toggle icon and navbar when click navbar link(scroll)
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
       
};


// scroll reveal
ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text',{
  strings: ['Web Developer', 'Flutter Developer', 'UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
const toggle =document.getElementById('toggleDark');
const body=document.querySelector('body');
// const header=document.querySelector('header');
// const logo=document.querySelector('logo');
toggle.addEventListener('click', function(){
  this.classList.toggle('bi-sun');
  if(this.classList.toggle('bi-moon')){
  //  body.style.background="white";
  //  body.style.color ='black';
  //  body.style.transform ='2s';
  body.style.background = "#1f242d";
  body.style.color="#fff";
  // header.style.background="#1f242d";
  // logo.style.color="#fff";
  // color: var(--text-color);
  }
  else{
    body.style.background="white";
   body.style.color ='black';
  //  body.style.header.background ="#fff";
  // header.style.background="white";
  // logo.style.color="black";
   body.style.transform ='2s';
   
  }
})