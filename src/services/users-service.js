import axios from 'axios';

async function registrationUser(username, email, password) {
  return axios({
    method: 'post',
    url: '/users',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      nickname: username,
      email: email,
      password: password,
      returnSecureToken: true,
    }),
  });
}
async function authorisationUser(email, password) {
  return axios({
    method: 'post',
    url: '/users/authorisation',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
}
async function sendEmail(email) {
  return axios({
    method: 'post',
    url: '/users/email',
    data: {
      email: email,
    },
  });
}
async function sendPass(oobCode, password) {
  return axios({
    method: 'post',
    url: '/users/password',
    data: {
      oobCode,
      password,
    },
  });
}
async function updateUser(username, idToken, password) {
  return axios({
    method: 'post',
    url: '/users/update',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      username,
      idToken,
      password,
      returnSecureToken: false,
    }),
  });
}

export { registrationUser, authorisationUser, sendEmail, sendPass, updateUser };
