// JS Practice 1 - Delta

// 1) declare variables with let, const, var and show scope differences
function declareVariables() {
  if (true) {
    let blockLet = 'I am block-scoped (let)';
    const blockConst = 'I am block-scoped and immutable (const)';
    var functionVar = 'I am function-scoped (var)';
  }

  // blockLet and blockConst are not accessible here (would throw ReferenceError if used)
  // functionVar is accessible here because var is function-scoped
  return {
    functionVarAvailable: typeof functionVar !== 'undefined',
    // these checks intentionally return false because block-scoped variables aren't accessible here
    blockLetAvailable: false,
    blockConstAvailable: false,
    explanation: 'let and const are block-scoped; var is function-scoped. const cannot be reassigned.'
  };
}   

// 2) Create fruits array and function returning second fruit
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
function getSecondFruit(arr) {
  return arr[1];
}

// 3) Function that pushes then pops and returns the array
function pushThenPop(arr, element) {
  arr.push(element);
  arr.pop();
  return arr;
}

// 4) Square numbers with map()
function squareNumbers(numbers) {
  return numbers.map(n => n * n);
}

// 5) Filter out even numbers (return odd numbers)
function filterOdd(numbers) {
  return numbers.filter(n => n % 2 !== 0);
}

// 6) person object + greeting function
const person = { name: 'Alex', age: 30, occupation: 'Developer' };
function greetPerson(p) {
  console.log(`Hello! My name is ${p.name}, I'm ${p.age} years old and I work as a ${p.occupation}.`);
}

// 7) Rectangle area function
function rectangleArea(rect) {
  return rect.width * rect.height;
}

// 8) Return object keys using Object.keys()
function objectKeys(obj) {
  return Object.keys(obj);
}

// 9) Merge two objects using Object.assign()
function mergeObjects(a, b) {
  return Object.assign({}, a, b);
}

// 10) Sum numbers using reduce()
function sumWithReduce(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// --- Example usage / simple demonstrations ---
console.log('\n1) Variable scope demo:');
console.log(declareVariables());

console.log('\n2) Second fruit:');
console.log(getSecondFruit(fruits));

console.log('\n3) pushThenPop demonstration:');
const arr3 = [1, 2, 3];
console.log(pushThenPop(arr3, 99));

console.log('\n4) squareNumbers:');
console.log(squareNumbers([1, 2, 3, 4]));

console.log('\n5) filterOdd:');
console.log(filterOdd([1, 2, 3, 4, 5, 6]));

console.log('\n6) greetPerson:');
greetPerson(person);

console.log('\n7) rectangleArea:');
console.log(rectangleArea({ width: 5, height: 4 }));

console.log('\n8) objectKeys:');
console.log(objectKeys({ a: 1, b: 2, c: 3 }));

console.log('\n9) mergeObjects:');
console.log(mergeObjects({ x: 1 }, { y: 2 }));

console.log('\n10) sumWithReduce:');
console.log(sumWithReduce([10, 20, 30]));
