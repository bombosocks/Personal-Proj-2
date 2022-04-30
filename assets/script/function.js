var slideIndex = 0;
showSlides();

function showSlides() {
  var index;
  var images = document.getElementsByClassName("mySlides");
  var circles = document.getElementsByClassName("dot");
  for (index = 0; index < 3; index++) {
    images[index].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > images.length) {slideIndex = 1}    
  for (index = 0; index < circles.length; index++) {
    circles[index].className = circles[index].className.replace(" active", "");
  }
  images[slideIndex-1].style.display = "block";  
  circles[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
}

// on mouseover
let img = document.querySelector('img');
let start = img.src;
let hover = img.getAttribute('data-hover'); //specified in img tag

img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } //to revert back to start


// survey val
var validateForm = () => {
  "use strict";
  var isValid = true;
  var name = document.getElementById("visitor-name");
  var num = document.getElementById("visitor-count");
  var date = document.getElementById("visit-date");
  var radio = document.getElementsByName("favorite-place");
  console.log(date.value);
  var error = document.getElementById("error");
  if (name.value == "") {
      isValid = false;
      name.style.backgroundColor = "pink";
      name.style.borderColor = "red";
      error.innerText = "Name cannot be empty. Please fill it out.";
  } else if (num.value == 0) {
      isValid = false;
      num.style.backgroundColor = "pink";
      num.style.borderColor = "red";
      error.innerText =
          "Number of visitors cannot be less than 1. Please rectify.";
  } else {
      isValid = true;
      name.style = null;
      error.innerText = "";
  }

  console.log("Is the name valid? " + isValid);
  return isValid;
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}