// Day 050 - Specs & Project Release
// Day 50 Milestone: Student Marks Manager specifications
function computeAverages(listScores) {
  if(!Array.isArray(listScores) || listScores.length === 0) return "Error: Invalid marks list";
  const tot = listScores.reduce((acc, c) => acc + c, 0);
  const avg = tot / listScores.length;
  let grade = "";
  if(avg >= 90) grade = "A";
  else if (avg >= 80) grade = "B";
  else grade = "C";
  return { average: avg.toFixed(1), gradeRank: grade };
}
console.log("Marks aggregation result:", computeAverages([85, 90, 78]));