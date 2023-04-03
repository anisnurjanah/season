// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// when menu onclick

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik luar sidebar for hide menu

const burger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
