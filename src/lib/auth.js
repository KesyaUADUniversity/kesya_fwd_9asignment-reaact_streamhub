// src/lib/auth.js
export const isLoggedIn = () => {
  return !!localStorage.getItem('auth_token');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
};