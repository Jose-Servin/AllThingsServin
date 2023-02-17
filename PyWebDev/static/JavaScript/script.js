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

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute("href");

        // scroll to top if href is #
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })}
        // scroll to pageSection if href is not # and href is a id we want to scroll to
        if (href != '#' && href.startsWith("#")) {
            pageSection = document.querySelector(href);
            pageSection.scrollIntoView({
                behavior: "smooth"})
        }
        // close mobile nav 
        if (link.classList.contains("main-nav-links")) {
            headerEl.classList.remove("nav-open");
        }
    })
})
