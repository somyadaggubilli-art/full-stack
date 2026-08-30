
// 1. SINGLE INHERITANCE (Person -> Student)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayPersonInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age); // Call parent class constructor
        this.rollNo = rollNo;
    }

    displayStudentDetails() {
        return `${this.displayPersonInfo()}, Roll No: ${this.rollNo}`;
    }
}


// 2. MULTILEVEL INHERITANCE (Person -> Student -> GraduateStudent)
class GraduateStudent extends Student {
    constructor(name, age, rollNo, specialization) {
        super(name, age, rollNo); // Call Student constructor
        this.specialization = specialization;
    }

    displayGraduateDetails() {
        return `${this.displayStudentDetails()}, Specialization: ${this.specialization}`;
    }
}


// 3. HIERARCHICAL INHERITANCE (Person -> Student & Person -> Teacher)

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Call Person constructor
        this.subject = subject;
    }

    displayTeacherDetails() {
        return `${this.displayPersonInfo()}, Subject: ${this.subject}`;
    }
}


// 4. PROTOTYPAL INHERITANCE (Object-based)
const userPrototype = {
    init(username, email) {
        this.username = username;
        this.email = email;
    },
    getProfile() {
        return `User: ${this.username} (${this.email})`;
    }
};

// Inherit directly using Object.create
const adminUser = Object.create(userPrototype);
adminUser.init("Santosh", "santosh@example.com");
adminUser.role = "System Admin";
adminUser.getAdminInfo = function () {
    return `${this.getProfile()}, Role: ${this.role}`;
};

// EXECUTION & DEMONSTRATION
console.log("=== 1. Single Inheritance Output ===");
const s1 = new Student("SOMYA", 20, "A24126552258");
console.log(s1.displayStudentDetails());

console.log("\n=== 2. Multilevel Inheritance Output ===");
const g1 = new GraduateStudent("SIRISHA", 22, "A24126552260", "ML");
console.log(g1.displayGraduateDetails());

console.log("\n=== 3. Hierarchical Inheritance Output ===");
const t1 = new Teacher("Dr. Aris", 45, "Computer Science");
console.log(t1.displayTeacherDetails());

console.log("\n=== 4. Prototypal Inheritance Output ===");
console.log(adminUser.getAdminInfo());