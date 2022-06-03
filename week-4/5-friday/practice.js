"use strict"; //use so we don't use reserved words

// Accessing HTML elements

const slides = document.getElementsByClassName("slider__slide");
const dots = document.getElementByClassname("slider__dots");
const prevNavBtn = document.getElementById("nav-button--prev");
const nextNavBtn = document.getElementById("nav-button--next");

// Slider Components

let currentSlide = 0;
