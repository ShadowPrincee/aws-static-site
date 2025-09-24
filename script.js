// Simple Contact Form Alert
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});
