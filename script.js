//--------------navigation bar color change on scroll-----------------

function scrollValue() {
  var navbar = document.getElementById("navbar");
  var scroll = window.scrollY;
  if (scroll < 500) {
    // navbar.classList.remove("BgColour");
  } else {
    navbar.classList.add("BgColour");
  }
}
window.addEventListener("scroll", scrollValue);

// ----------------------- toggle contact button---------------

// document.addEventListener("DOMContentLoaded", function () {
//   const showFormBtn = document.getElementById('show-form-btn');
//   const myForm = document.getElementById('contact');
//   var footer = document.getElementById('footer');
//   const btns = document.querySelectorAll('a');
//   const btn = btns[btns.length - 1];

//   showFormBtn.addEventListener('click', function () {
//     if (myForm.style.display === 'none') {
//       myForm.style.display = 'block';

//       window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth'
//       });

//       footer.style.color = '#d6d6d6';
//     } else {
//       myForm.style.display = 'none';
//       footer.style.color = '#0b0909';
//     }
//     if (btn) {
//       btn.addEventListener('mouseover', function () {
//         this.style.boxShadow = '0 0 20px 2px #d6d6d6';
//       });
//       btn.addEventListener('mouseout', function() {
//         this.style.boxShadow = '';
//       });
//     }
//   });

// });
