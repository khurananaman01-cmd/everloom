document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const company = e.target.company.value;
  const message = e.target.message.value;

  // Show a simple message (you can later integrate with Formspree or your own backend)
  document.getElementById('form-message').textContent = 'Thanks, ' + name + '! We received your message.';
  
  // Reset form
  e.target.reset();
});
