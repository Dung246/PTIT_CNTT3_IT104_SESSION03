let username: string = "Trần Anh Dũng";
let age: number = 25;
let job: string = "Developer";

function introduce(name: string, age: number, job: string): void {
    console.log("Tên: " + name);
    console.log("Tuổi: " + age);
    console.log("Nghề nghiệp: " + job);
}
introduce(username, age, job);