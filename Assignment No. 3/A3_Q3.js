let string = 'INDIA';
let arr = string.split(''); 
arr.splice(3, 0, 'ONES'); // Insert 'ONES' at index 3
let output = arr.join('');
console.log(output); // 'INDONESIA'
