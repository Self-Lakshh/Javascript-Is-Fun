// Day 040 - Specs & Project Release
// Day 40: Creating Promises and chaining states (Reference: W3Schools Promises)
const loadUserData = (id) => {
  return new Promise((resolve, reject) => {
    if (id <= 0) return reject("Invalid user ID");
    setTimeout(() => resolve({ id: id, name: "Lakshya" }), 800);
  });
};

loadUserData(1)
  .then(user => {
    console.log("Loaded User:", user);
    return user.name.toUpperCase();
  })
  .then(upperName => {
    console.log("Chained uppercase transformation: " + upperName);
  })
  .catch(err => console.error("Error encountered: " + err));