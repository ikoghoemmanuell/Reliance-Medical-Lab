"use strict";
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menuSlide = document.querySelector(".menu-slide");
const dropOpen = document.querySelector(".drop-open");
const dropClose = document.querySelector(".drop-close");
const dropSlide = document.querySelector(".dropdown-content");
const ultra = document.querySelector(".ultra");

menuOpen.addEventListener("click", function () {
  menuSlide.classList.remove("hidden");
  menuClose.classList.remove("hidden");
  menuOpen.classList.add("hidden");
});
menuClose.addEventListener("click", function () {
  menuSlide.classList.add("hidden");
  menuClose.classList.add("hidden");
  menuOpen.classList.remove("hidden");
});
const ultraSoundOpen = function () {
  dropSlide.classList.remove("hidden");
  dropClose.classList.remove("hidden");
  dropOpen.classList.add("hidden");
};
dropOpen.addEventListener("click", function () {
  ultraSoundOpen();
});
ultra.addEventListener("click", function () {
  ultraSoundOpen();
});
dropClose.addEventListener("click", function () {
  dropSlide.classList.add("hidden");
  dropClose.classList.add("hidden");
  dropOpen.classList.remove("hidden");
});
