'use strict'

// For Book Recommendation slides
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

// For Contact Form Extraction
const form = document.querySelector('.contact-form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const contactFormSelect = document.querySelector('.contact-form-select')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(username.value);
    console.log(email.value);
    console.log(contactFormSelect.value);
    console.log(message.value);

})

// For Dynamic textarea placeholder text
const placeholderDefaults = {
    'question': "What's your question?",
    'idea': "Share your idea!",
    'project': "Describe your project in a few sentences."
}

const textAreaMsg = document.querySelector('#message')
contactFormSelect.addEventListener('input', function (e) {
    let key = e.target.value;
    let msg = placeholderDefaults[key];
    textAreaMsg.placeholder = msg;

})