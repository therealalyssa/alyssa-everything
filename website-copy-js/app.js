
// Signup forms

let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
// Signup forms
// Arithemtic Operators (by adding)
let x=10;
let y=2;
let result=x+y;
console.log('Result is: '+result)
// The + sign here is a concatenating operator here because it is used with string

var firstname = 'Alyssa';
var surname = 'Barrett';
var fullname = firstname + '' + surname;
// the variable fullname now contains the value “Alyssa Barrett”

// comparison variable
let age= 37
age==34
// Want a certain demographic for our buyers of ABA Coin

function checkAge () {
  const age =document.getElementById("age-input")
  const ageNum= parseInt(age.value)
  if (ageNum>49) {
    alert('Sorry you are not eligible')
  } else if (ageNum>18&& ageNum<49){
    alert ('Welcome to the team')
  }
   else {
    alert ('Sorry you are not eligible')
  }
}



// loops for (let i=0; i<5; o++){}
for(i = 10; i > 0; i--) {  console.log(i);}

// Main Menu


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



// function checkIfEven(num) {  return (num % 2 === 0) ? true : false;} 
// function checkIfEven(num) {  if(num % 2 === 0)  
//  {    return true;  }  
// else {    return false  }} 
// console.log("13 is even? " ,checkIfEven(13));
// console.log("24 is even? " ,checkIfEven(24));