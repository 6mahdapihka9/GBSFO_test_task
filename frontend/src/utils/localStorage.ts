function getToken() {
  return localStorage.getItem('accessToken');
}

function removeToken() {
  localStorage.removeItem('accessToken');
}

function saveToken(token: string) {
  localStorage.setItem('accessToken', token);
}

export {
  getToken,
  removeToken,
  saveToken,
};
