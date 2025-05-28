// Handles the Google Login response
function handleCredentialResponse(response) {
  const jwt = response.credential;
  const payload = parseJwt(jwt);
  alert("Logged in as: " + payload.name);
  
  // ✅ Redirect after successful login
  window.location.href = "dashboard.html"; // You can change this
}

// Helper function to decode the JWT
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = atob(base64Url);
  return JSON.parse(base64);
}
