// Normal JavaScript function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Rahul"));


// JavaScript Class
class Student {

    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

// Creating multiple objects
var student1 = new Student("Rahul", 20);
var student2 = new Student("Priya", 21);
var student3 = new Student("Arun", 19);

// Calling method for each object
student1.displayDetails();
student2.displayDetails();
student3.displayDetails();