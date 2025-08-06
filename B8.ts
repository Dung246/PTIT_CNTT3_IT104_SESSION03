function tranformNumber(value: number | string): number | null {
    let num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
}

function add(a: number | string, b: number | string): number | string {
    let numA = tranformNumber(a);
    let numB = tranformNumber(b);
    if (numA === null || numB === null) {
        return "Invalid input";
    }
    return numA + numB;
}

function subtract(a: number | string, b: number | string): number | string {
    let numA = tranformNumber(a);
    let numB = tranformNumber(b);
    if (numA === null || numB === null) {
        return "Invalid input";
    }
    return numA - numB;
}

function multiply(a: number | string, b: number | string): number | string {
    let numA = tranformNumber(a);
    let numB = tranformNumber(b);
    if (numA === null || numB === null) {
        return "Invalid input";
    }
    return numA * numB;
}

function divide(a: number | string, b: number | string): number | string {
    let numA = tranformNumber(a);
    let numB = tranformNumber(b);
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