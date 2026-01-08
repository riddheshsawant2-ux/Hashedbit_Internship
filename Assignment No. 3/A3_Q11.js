const input = [
  {
    student1: {
      subject1: 44, subject2: 76, subject3: 87, subject4: 97, subject5: 77
    }
  },
  {
    student2: {
      subject1: 54, subject2: 66, subject3: 87, subject4: 97, subject5: 37
    }
  },
  {
    student3: {
      subject1: 49, subject2: 56, subject3: 87, subject4: 97, subject5: 90
    }
  }
];

const output = input.map(item => {
  const studentKey = Object.keys(item)[0];
  const subjects = Object.values(item[studentKey]);
  const average = subjects.reduce((sum, score) => sum + score, 0) / subjects.length;
  return { [studentKey]: { average: Math.round(average) } };
});

console.log(output);
