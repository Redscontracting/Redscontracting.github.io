(function() {
    emailjs.init("NV6C7W3jCINaI-u9m");
})();

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('.hamburger-close');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active');
    closeButton.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
}

/*
document.querySelector('.button--cta').addEventListener('click', function() {
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
});
*/

// Handle Request a Quote Form Submission
document.querySelector('.quote-form').addEventListener('submit', function(e) {
    e.preventDefault();

    /* uncomment in production */
       emailjs.sendForm('service_s3a2fyk', 'template_0y7rceq', this)
           .then(function(response) {
               alert('Quote Request Sent! Thank you.');
           }, function(error) {
               alert('FAILED... Please try again.', error);
           }
       );
      
});

/*** To implement! ***
// Handle Contact Us Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
        
    emailjs.sendForm('service_s3a2fyk', 'template_ej9t2jh', this)
    .then(function(response) {
    alert('Message Sent! We will get back to you soon.');
    }, function(error) {
        alert('FAILED... Please try again.', error);
        });
    }
);	
***/
