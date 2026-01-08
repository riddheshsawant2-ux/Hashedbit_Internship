function digitalRoot(num) {
  while (num >= 10) {
    num = String(num).split('').reduce((sum, digit) => sum + +digit, 0);
  }
  return num;
}

console.log(digitalRoot(789)); // 7 + 8 + 9 = 24 -> 2 + 4 = 6 -> Output: 6
