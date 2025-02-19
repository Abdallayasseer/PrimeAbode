// Navbar toggle im mobile

const /**{nodeElements} */ $navbar = document.querySelector("[data-nav]");
const $navToggle = document.querySelector("[data-nav-toggle]");

$navToggle.addEventListener("click", () => {
  $navbar.classList.toggle("active");
  $navToggle.classList.toggle("active");
});
// Header smooth scrolling
const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


//add to favorite button 
const $add_To_Favorite = document.querySelectorAll("[data-favourtie-btn]")
$add_To_Favorite.forEach($add_To_Favorite =>{
  $add_To_Favorite.addEventListener("click", () => {
    $add_To_Favorite.classList.toggle("active");
  });
})