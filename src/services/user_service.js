import { apiConstants } from '../constants/';

const login = (username, password) => {

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(apiConstants.HOST + '/login', options)
  .then(response => {

    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    return response.json();
  })
  .then(user => {
    if (user && user.access_token) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  });
}

const logout = () => {
  localStorage.removeItem('user');
};

export const userService = {
  login,
  logout,
};
