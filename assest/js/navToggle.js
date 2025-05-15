const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const sidebar = document.getElementById('sidebar');

// Event listener for opening the sidebar
menuToggle.addEventListener('click', function () {
  sidebar.classList.add('show'); // Show the sidebar
  menuToggle.classList.add('hidden'); // Hide the menu toggle button
  menuClose.classList.remove('hidden'); // Show the menu close button
});

// Event listener for closing the sidebar
menuClose.addEventListener('click', function () {
  sidebar.classList.remove('show'); // Hide the sidebar
  menuClose.classList.add('hidden'); // Hide the menu close button
  menuToggle.classList.remove('hidden'); // Show the menu toggle button
});
