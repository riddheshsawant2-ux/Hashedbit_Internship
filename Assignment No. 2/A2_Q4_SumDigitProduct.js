function sumDigitProducts(n1, n2) {
    let sum = 0;
    // Convert to strings and pad shorter number with zeros
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    for(let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = parseInt(str1[str1.length - 1 - i]) || 0;
        let digit2 = parseInt(str2[str2.length - 1 - i]) || 0;
        sum += digit1 * digit2;
    }
    return sum;
}

console.log(sumDigitProducts(6, 34)); // 24 (6*4 + 0*3)
console.log(sumDigitProducts(123, 456)); // 32 (3*6 + 2*5 + 1*4)
