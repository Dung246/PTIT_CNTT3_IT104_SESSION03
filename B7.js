function removeCharacters(input) {
    var result = "";
    var seenCharacters = new Set();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (!seenCharacters.has(char)) {
            seenCharacters.add(char);
            result += char;
        }
    }
    return result;
}
var input1 = "banana";
var input2 = "hello world";
console.log(removeCharacters(input1));
console.log(removeCharacters(input2));
