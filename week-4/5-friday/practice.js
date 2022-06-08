"use strict"; //use so we don't use reserved words

// Accessing HTML elements

const slides = document.getElementsByClassName("slider__slide");
const dots = document.getElementsByClassName("slider__dots");
const dots2 = document.querySelectorAll(".slider__dots");
const prevNavBtn = document.getElementById("nav-button--prev");
const nextNavBtn = document.getElementById("nav-button--next");
const caption = document.querySelectorAll(".caption");
const captionBtn = document.querySelector(".caption-btn");
const captionToAdd = document.querySelector("input");
const photoToCaption = document.getElementById("photos");

// Slider Components

let currentSlide = 0;

prevNavBtn.addEventListener("click", () => changeSlide(currentSlide - 1));
// this is a call back function, a function isn't being used as an argument
nextNavBtn.addEventListener("click", () => changeSlide(currentSlide + 1));

// function changeSlide(moveTo)
function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }
  slides[currentSlide].classList.toggle("active");
  dots[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  dots[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

// Dot functionality

dots2.forEach((dot, index) => {
  console.log(dot, index);
  dot.addEventListener("click", () => {
    if (currentSlide !== index) {
      changeSlide(index);
    }
  });
});

// user adds a caption functionality
let captionInputValue;
captionToAdd.addEventListener("input", (event) => {
  captionInputValue = event.target.value;
  console.log(captionInputValue);
});

captionBtn.addEventListener("click", function () {
  let photoCaptionToUpdate = photoToCaption.selectedIndex;
  console.log(photoCaptionToUpdate);
  caption[photoCaptionToUpdate].textContent = captionInputValue;
});
