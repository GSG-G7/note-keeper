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

const title = selector('#title');
const titleError = selector('#title-error');

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
  e.preventDefault();
  if (userErr() && emailErr() && passwordErr() && confirmErr() && pasteErr()) {
    fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        api_paste_name: title.value,
        api_paste_code: paste.value,
      }),
    });
  }
});
