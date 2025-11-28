function register() {
  const username = document.getElementById("register_username").value;
  const password = document.getElementById("register_password").value;

  fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  });
}

function login() {
  const username = document.getElementById("login_username").value;
  const password = document.getElementById("login_password").value;

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  });
}