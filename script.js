// File script.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Toggles Class Active untuk Hamburger Menu
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburgerMenu.onclick = (e) => {
    navLinks.classList.toggle("active");
    // Mencegah default link behavior
    e.preventDefault();
  };

  // 2. Klik di luar sidebar untuk menghilangkan nav
  document.addEventListener("click", function (e) {
    // Cek jika yang diklik BUKAN hamburger menu DAN BUKAN di dalam navLinks
    if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

  // 3. Menghilangkan nav saat salah satu link diklik (di mobile)
  const allNavLinks = document.querySelectorAll(".nav-links a");
  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  console.log("Website Kopi telah dimuat dan siap.");
});
