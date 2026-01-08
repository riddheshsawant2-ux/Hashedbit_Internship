function findTax(salary) {
    switch(true) {
        case (salary > 0 && salary <= 500000):
            return 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.10;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.20;
        case (salary > 1500000):
            return salary * 0.30;
        default:
            return "Invalid salary";
    }
}

console.log(findTax(600000)); // 60000
console.log(findTax(1200000)); // 240000
