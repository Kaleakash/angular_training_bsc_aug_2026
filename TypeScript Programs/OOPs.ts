// class Employee {
//     id: number=100;
//     name: string="Raj";
//     salary: number=50000;

//     display(): void {
//         console.log("ID:", this.id);
//         console.log("Name:", this.name);
//         console.log("Salary:", this.salary);
//     }
// }
// let emp1 = new Employee();
// emp1.display();

// constructor in class
// class Employee {
//     constructor() {
//         console.log("Constructor is called");
//     }
// }
// let emp2 = new Employee();

// using constructor to initialize properties
class Employee {
    //id:number;
    constructor(private id: number, public name: string, public salary: number) {
       //this.id = id;
    }
    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
// parameterized constructor
let emp1 = new Employee(100, "Raj", 50000);
emp1.display();
console.log("Employee Name:", emp1.name);
console.log("Employee Salary:", emp1.salary);
//console.log("Employee ID:", emp1.id); // Error: Property 'id' is private and only accessible within class 'Employee'.
