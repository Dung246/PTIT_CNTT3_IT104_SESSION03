function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var firstName = "john";
var lastName = "doe";
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
