// normal functions 
function hello() {
    console.log("Normal function in TypeScript");
}
hello();
// function with parameters 
function add(a:number,b:number){
    let sum:number = a+b;
    console.log("The sum of a and b is: " + sum);
}
add(10,20);
add(100,200);
// function with no return type
function greet(name:string):void{
    console.log("Hello " + name);
}
greet("Raju");
// function with return type
function multiply(a:number,b:number):number{
    return a*b;
}
let result:number = multiply(10,20);
console.log("The product of a and b is: " + result);
// function with any return value 
function getData():any{
    return "Hello World";
}
console.log("Data from getData(): " + getData());   

// function with optional parameter
function display(id:number, name?:string){
    console.log("ID: " + id);
    if(name){
        console.log("Name: " + name);
    }else {
        console.log("Name is not provided");
    }
}
display(1,"Raju");
display(2);

