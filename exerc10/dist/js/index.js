"use strict";
/* 10. Crie uma classe `Employee` com propriedades `name`, `role` e `salary`. Adicione um método que calcula um aumento de salário com base em uma porcentagem. */
class Employee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(value) {
        this.salary = value;
    }
    setReajuste(percent) {
        this.setSalary(this.getSalary() * (1 + percent / 100));
    }
    descEmployee() {
        const msg = `
            Empregado: ${this.name}
            Cargo: ${this.role}
            Salário: ${this.getSalary().toFixed(2)}
        `;
        return msg;
    }
}
const empl1 = new Employee("Clóvis!", "Analista Treinamento", 2000);
console.log(empl1.descEmployee());
empl1.setReajuste(50);
console.log(empl1.descEmployee());
