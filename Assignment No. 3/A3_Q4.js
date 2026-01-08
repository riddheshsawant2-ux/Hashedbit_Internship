let text = 'The quick brown fox jumps over the lazy dog.';
let vowels = 0, consonants = 0;
text.toLowerCase().split('').forEach(char => {
  if (/[aeiou]/.test(char)) vowels++;
  else if (/[a-z]/.test(char)) consonants++;
});
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
