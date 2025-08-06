function tranformNumber(value) {
    var num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var numA = tranformNumber(a);
    var numB = tranformNumber(b);
    if (numA === null || numB === null) {
        return "Invalid input";
    }
    return numA + numB;
}
function subtract(a, b) {
    var numA = tranformNumber(a);
    var numB = tranformNumber(b);
    if (numA === null || numB === null) {
        return "Invalid input";
    }
    return numA - numB;
}
function multiply(a, b) {
    var numA = tranformNumber(a);
    var numB = tranformNumber(b);
    if (numA === null || numB === null) {
        return "Invalid input";
    }
    return numA * numB;
}
function divide(a, b) {
    var numA = tranformNumber(a);
    var numB = tranformNumber(b);
    if (numA === null || numB === null || numB === 0) {
        return "Invalid input";
    }
    return numA / numB;
}
console.log(add("10", 5));        
console.log(subtract("10", "5")); 
console.log(multiply(10, "5"));   
console.log(divide("10", "5"));   
console.log(add("abc", 10));      
