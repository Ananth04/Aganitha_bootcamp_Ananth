var emailForm = document.getElementById('emailForm');
var emailInput = document.getElementById('emailInput');
var errorMessage = document.getElementById('errorMessage');

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  var enteredEmail = emailInput.value.trim();

  if (validateEmail(enteredEmail)) {
    errorMessage.style.display = 'none';
    console.log('Valid email:', enteredEmail);
  } else {
    errorMessage.style.display = 'block';
  }
}

emailForm.addEventListener('submit', handleSubmit);
