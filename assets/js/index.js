"use strict";
class Worker {
  constructor(firstname, lastname, days, salary, isPremium) {
    if (salary < 0) {
      throw new RangeError("Salary must be a positive number");
    }
    if (days < 0) {
      throw new RangeError("Days must be a positive number");
    }
    this.firstname = firstname;
    this.lastname = lastname;
    this.days = days;
    this.salary = salary;
    this.isPremium = isPremium;
  }
  getFullName = () => `${this.firstname} ${this.lastname}`;
  getSalary = (days) =>
    this.isPremium
      ? this.salary * this.days + this.salary * this.days * 0.25
      : this.salary * this.days;
}

const worker1 = new Worker("Test", "Testovich", 30, 200, true);
const worker2 = new Worker("Testa", "Testovna", 25, 250, false);

console.log(worker1);
console.log(worker1.getFullName());
console.log(worker1.getSalary());

console.log(worker2);
console.log(worker2.getFullName());
console.log(worker2.getSalary());
