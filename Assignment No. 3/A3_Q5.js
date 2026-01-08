function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

console.log(correctfn('I love my country India', 'country', 'nation')); 
// 'I love my nation India'
