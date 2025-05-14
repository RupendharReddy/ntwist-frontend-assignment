let startTime;
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');
const timeMessage = document.getElementById('timeMessage');
const newFormBtn = document.getElementById('newFormBtn');
const inputs = form.querySelectorAll('input, textarea, button');

// const confirmation = document.getElementById('confirmation');

form.addEventListener('focusin', () => {
  if (!startTime) startTime = new Date();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Calculate time spent
  const timeSpent = Math.floor((new Date() - startTime) / 1000);
  timeMessage.textContent = `You took ${timeSpent} seconds to fill the form.`;

  // Disable form inputs
  inputs.forEach(input => input.disabled = true);

  // Show confirmation
  confirmation.classList.remove('hidden');
  form.classList.add('hidden');
});

newFormBtn.addEventListener('click', () => {
  // Reset everything
  form.reset();
  form.classList.remove('hidden');
  confirmation.classList.add('hidden');
  inputs.forEach(input => input.disabled = false);

  startTime = null;
});
