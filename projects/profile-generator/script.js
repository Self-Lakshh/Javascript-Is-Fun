function updateProfile() {
  const name = document.getElementById("prof-name").value || 'Anonymous';
  const role = document.getElementById("prof-role").value || 'Developer';
  const bio = document.getElementById("prof-bio").value || 'Vanilla JS code writer.';
  const theme = document.getElementById("prof-theme").value;
  
  document.getElementById("card-name").textContent = name;
  document.getElementById("card-role").textContent = role;
  document.getElementById("card-bio").textContent = bio;
  document.getElementById("profile-preview-card").style.background = theme;
  
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  document.getElementById("card-avatar").textContent = initials || '??';
}

document.addEventListener("DOMContentLoaded", updateProfile);