let startTime;
const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");
const timeMessage = document.getElementById("timeMessage");
const newFormBtn = document.getElementById("newFormBtn");
const inputs = form.querySelectorAll("input, textarea, button");

form.addEventListener("focusin", () => {
  if (!startTime) startTime = new Date();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form.firstname.value.trim();
  const lastName = form.lastname.value.trim();
  const namePattern = /^[A-Za-z\s]+$/;

  // Name validation
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    alert("Please enter valid names using only alphabets.");
    return;
  }

  // Calculate time spent
  const timeSpent = Math.floor((new Date() - startTime) / 1000);

  // Personalized confirmation message
  timeMessage.innerHTML = `Hi <strong>${firstName} ${lastName}</strong>, your form was submitted successfully.<br>You took ${timeSpent} seconds to fill the form.`;

  // Disable form inputs
  inputs.forEach((input) => (input.disabled = true));

  // Show confirmation
  confirmation.classList.remove("hidden");
  form.classList.add("hidden");
});

newFormBtn.addEventListener("click", () => {
  form.reset();
  form.classList.remove("hidden");
  confirmation.classList.add("hidden");
  inputs.forEach((input) => (input.disabled = false));
  startTime = null;
});
