const logoutBtn = document.getElementById('logout');

const handleLogoutBtn = () => {
  localStorage.removeItem('username');
  location.reload(true);
}

logoutBtn.addEventListener('click', handleLogoutBtn);