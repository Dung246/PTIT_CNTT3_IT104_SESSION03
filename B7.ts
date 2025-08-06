function removeCharacters(input: string): string {
    let result = "";
    let seenCharacters = new Set<string>();

    for (let char of input) {
        if (!seenCharacters.has(char)) {
            seenCharacters.add(char);
            result += char;
        }
    }

    return result;
}
let input1: string = "banana";
let input2: string = "hello world";
console.log(removeCharacters(input1)); 
console.log(removeCharacters(input2)); 
