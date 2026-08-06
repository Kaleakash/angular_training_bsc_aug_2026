var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Raj";
        this.salary = 50000;
    }
    Employee.prototype.display = function () {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.display();
