const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

function showExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existing.style.display = "block";
  } else {
    existing.style.display = "none";
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  alert(`Logged in as ${username.value}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  showExistingUser();
});

existing.addEventListener("click", function() {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});

// Run immediately when the page loads
showExistingUser();