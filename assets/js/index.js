"use strict";
class Worker {
  constructor(firstName, lastName, days, salary, isPremium) {
    if (isNaN(days) || typeof days !== "number") {
      throw new TypeError("Days must be a number");
    }
    if (isNaN(salary) || typeof salary !== "number") {
      throw new TypeError("Salary must be a number");
    }
    if (typeof firstName !== "string" || firstName.trim() === "") {
      throw new TypeError("FirstName must be a string");
    }
    if (typeof lastName !== "string" || lastName.trim() === "") {
      throw new TypeError("LastName must be a string");
    }
    if (typeof isPremium !== "boolean") {
      throw new TypeError("Invalid typeof isPremium");
    }
    if (salary < 0) {
      throw new RangeError("Salary must be a positive number");
    }
    if (days < 0) {
      throw new RangeError("Days must be a positive number");
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.days = days;
    this.salary = salary;
    this.isPremium = isPremium;
  }
  getFullName = () => `${this.firstName} ${this.lastName}`;
  getSalary = () =>
    this.isPremium ? this.salary * this.days * 1.25 : this.salary * this.days;
}

const worker1 = new Worker("Test", "Testovich", 30, 200, true);
const worker2 = new Worker("Testa", "Testovna", 25, 250, false);

console.log(worker1);
console.log(worker1.getFullName());
console.log(worker1.getSalary());

console.log(worker2);
console.log(worker2.getFullName());
console.log(worker2.getSalary());
