document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulate form submission
  document.getElementById('form-response').textContent = 'Thank you! We will get back to you as soon as possible.';
  this.reset();
});
