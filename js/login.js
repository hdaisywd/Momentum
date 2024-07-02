const loginForm = document.getElementById('login-form');
const wrapper = document.getElementById('wrapper');

const USER_KEY = 'username';
const HIDDEN_CLASS = 'hidden';

function loggedInPageLoad(userName) {
  const greeting = document.querySelector('#greeting');
  greeting.innerText = `Nice to meet you, ${userName}`;

  loginForm.classList.add(HIDDEN_CLASS);
  wrapper.classList.remove(HIDDEN_CLASS);
}

function onSubmitHandler(e) {
  e.preventDefault();
  
  const userName = loginForm.querySelector('input').value;
  localStorage.setItem(USER_KEY, userName);

  loggedInPageLoad(userName);
}

loginForm.addEventListener('submit', onSubmitHandler);

if (localStorage.getItem(USER_KEY) !== null) {
  loggedInPageLoad(localStorage.getItem(USER_KEY));
}