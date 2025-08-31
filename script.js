const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('شكراً لتواصلك! سيتم الرد عليك قريباً.');
  form.reset();
});