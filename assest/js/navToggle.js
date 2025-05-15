const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
  sidebar.classList.add('show');
  menuToggle.classList.add('hidden');
  menuClose.classList.remove('hidden');
});

menuClose.addEventListener('click', function () {
  sidebar.classList.remove('show');
  menuClose.classList.add('hidden');
  menuToggle.classList.remove('hidden');
});