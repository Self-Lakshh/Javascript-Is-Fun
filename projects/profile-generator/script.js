function updateProfile() {
  let name = document.getElementById("prof-name").value.trim() || "Self-Lakshh";
  let role = document.getElementById("prof-role").value.trim() || "Developer";
  let bio = document.getElementById("prof-bio").value.trim() || "Vanilla JS mastery complete.";
  let theme = document.getElementById("prof-theme").value;
  
  document.getElementById("card-name").textContent = name;
  document.getElementById("card-role").textContent = role;
  document.getElementById("card-bio").textContent = bio;
  document.getElementById("profile-preview-card").style.background = theme;
  
  let initials = name.split(" ").map(x => x[0]).join("").substring(0, 2).toUpperCase();
  document.getElementById("card-avatar").textContent = initials || "SL";
}