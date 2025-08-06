var username = "Alice";
console.log("Giá trị ban đầu của username:", username);
username = 123;
console.log("Giá trị sau khi gán lại:", username); //TypeScript báo lỗi: Type 'number' is not assignable to type 'string'
