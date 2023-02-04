// Set current year dynamically 
year = document.getElementById('year')
let date =  new Date().getFullYear();
console.log(date)
year.textContent = date;

// Mobile-nav open and close functionality 
// If you click the button, we apply nav-open class to nav element
MobileNavButton = document.querySelector(".button-mobile-nav");

headerEl = document.querySelector(".header");

MobileNavButton.addEventListener('click', function(){
    headerEl.classList.toggle("nav-open");
}
)

// Smooth Scrolling functionality 

