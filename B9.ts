function toNumber(value) {
    let num = Number(value);
    return isNaN(num) ? null : num;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0)
        return "Không thể chia cho 0";
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}

function factorial(n) {
    if (n < 0)
        return "Giai thừa không có số âm";


    if (n % 1 !== 0)
        return "Giai thừa chỉ áp dụng số nguyên";

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function handleOperation(operator) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let resultElement = document.getElementById("result");

    let num1 = toNumber(input1);
    let num2 = toNumber(input2);

    let result;

    switch (operator) {
        case '+':
            result = validate(num1, num2) ? add(num1, num2) : "Lỗi đầu vào";
            break;
        case '-':
            result = validate(num1, num2) ? subtract(num1, num2) : "Lỗi đầu vào";
            break;
        case '*':
            result = validate(num1, num2) ? multiply(num1, num2) : "Lỗi đầu vào";
            break;
        case '/':
            result = validate(num1, num2) ? divide(num1, num2) : "Lỗi đầu vào";
            break;
        case '^':
            result = validate(num1, num2) ? power(num1, num2) : "Lỗi đầu vào";
            break;
        case '√':
            result = validate(num1, num2) ? sqrt(num1, num2) : "Lỗi đầu vào";
            break;
        case '!':
            result = num1 !== null ? factorial(num1) : "Lỗi đầu vào";
            break;
        default:
            result = "Phép toán không hợp lệ";
    }

    resultElement.innerText = "Kết quả: " + result;
}

function validate(a, b) {
    return a !== null && b !== null;
}
