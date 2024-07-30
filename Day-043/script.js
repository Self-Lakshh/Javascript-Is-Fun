// Day 043 - Specs & Project Release
// Day 43: Promise.all() vs Promise.allSettled() Practice
console.log("Day 43: Promise.all() vs Promise.allSettled() Practice");

const resolveP = Promise.resolve("Success!");
const rejectP = Promise.reject("Failure error code!");

Promise.allSettled([resolveP, rejectP]).then(results => {
  console.log("Promise.allSettled results log:");
  results.forEach(res => console.log("Status:", res.status, "Value/Reason:", res.value || res.reason));
});