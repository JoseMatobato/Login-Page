const loginForm = document.querySelector('#login');
const userNameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (userNameInput.value === '' && passwordInput.value === '') {
  	console.log("Login failed");
    errorMessage.textContent = 'Please enter a username and password.';
    errorMessage.classList.add('error-animation');
  } else if (userNameInput.value === '') {
  	console.log("Login failed");
    errorMessage.textContent = 'Please enter a username.';
    errorMessage.classList.add('error-animation');
  } else if (passwordInput.value === '') {
  	console.log("Login failed");
    errorMessage.textContent = 'Please enter a password.';
    errorMessage.classList.add('error-animation');
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.remove('error-animation');
    alert('Welcome!');
  }
});
