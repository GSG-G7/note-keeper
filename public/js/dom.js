const selector = select => document.querySelector(select);

const form = selector('.form');

const username = selector('#username');
const usernameError = selector('#username-error');

const email = selector('#email');
const emailError = selector('#email-error');

const password = selector('#password');
const passwordError = selector('#password-error');

const confirm = selector('#confirm');
const confirmError = selector('#confirm-error');

const paste = selector('#paste');
const pasteError = selector('#paste-error');

const userErr = () => {
  if (username.value === '') {
    usernameError.textContent = 'Enter Your Name';
    return false;
  }
  usernameError.textContent = '';
  return true;
};


const emailErr = () => {
  if (email.value === '') {
    emailError.textContent = 'Enter Your Email';
    return false;
  } if (!email.value.includes('@')) {
    emailError.textContent = 'Wrong Email';
    return false;
  }
  emailError.textContent = '';
  return true;
};


const passwordErr = () => {
  if (password.value === '') {
    passwordError.textContent = 'Enter Your Password';
    return false;
  }
  passwordError.textContent = '';
  return true;
};


const confirmErr = () => {
  if (confirm.value !== password.value) {
    confirmError.textContent = 'Error Confirme';
    return false;
  }
  confirmError.textContent = '';
  return true;
};

const pasteErr = () => {
  if (paste.value === '') {
    pasteError.textContent = 'Enter Your Note';
    return false;
  }
  pasteError.textContent = '';
  return true;
};

form.addEventListener('submit', (e) => {
  if (!(userErr() && emailErr() && passwordErr() && confirmErr() && pasteErr())) e.preventDefault();
});
