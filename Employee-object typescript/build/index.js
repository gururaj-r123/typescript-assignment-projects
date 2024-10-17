"use strict";
class Employee {
    constructor(id, name, phone, isMarried) {
        if (Employee.userid.has(id)) {
            throw new Error(`the userid ${id} already exists`);
        }
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.isMarried = isMarried;
        Employee.userid.add(id);
    }
}
Employee.userid = new Set();
let emp = new Employee(1, "gururaj", 9844987067, false);
let emparr = [];
emparr.push(emp);
// console.log(emparr)
emparr.push(new Employee(2, "deepu", 9844900067, false));
emparr.push(new Employee(3, "mahesh", 984444067, false));
emparr.push(new Employee(4, "suresh", 984499967, false));
emparr.push(new Employee(5, "harish", 984497, true));
console.log(emparr);
