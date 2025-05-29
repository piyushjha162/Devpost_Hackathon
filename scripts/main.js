document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Normal login submitted (no backend connected)");
});

function handleCredentialResponse(response) {
  // Decode the JWT token
  const data = parseJwt(response.credential);

  // Store user data in localStorage (optional)
  localStorage.setItem("user", JSON.stringify(data));

  // Redirect to dashboard page
  window.location.href = "dashboard.html";
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
