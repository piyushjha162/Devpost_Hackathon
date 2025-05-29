window.onload = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get("access_token");

  if (!accessToken) {
    alert("Not authorized. Redirecting to login.");
    window.location.href = "index.html";
    return;
  }

  // Fetch user info from Google
  fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then(res => res.json())
  .then(user => {
    document.getElementById("user-name").innerText = user.name;
    localStorage.setItem("access_token", accessToken); // store if needed
  })
  .catch(() => {
    alert("Session expired. Please log in again.");
    window.location.href = "index.html";
  });
};

function logout() {
  localStorage.removeItem("access_token");
  window.location.href = "index.html";
}
