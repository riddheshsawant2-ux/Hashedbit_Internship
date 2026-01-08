const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 100] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map(student => ({
  name: student.name,
  average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
}));
console.log(result);
