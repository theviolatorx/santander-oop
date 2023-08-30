/* 10. Crie uma classe `Employee` com propriedades `name`, `role` e `salary`. Adicione um método que calcula um aumento de salário com base em uma porcentagem. */

class Employee {
    name: string;
    role: string;
    salary: number;

    constructor(
        name: string,
        role: string,
        salary: number,
    ){
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    private getSalary():number {
        return this.salary;
    }

    private setSalary(value: number): void {
        this.salary = value;
    }

    setReajuste(percent: number): void {
        this.setSalary(this.getSalary() * (1 + percent / 100));
    }

    descEmployee():string {
        const msg:string = `
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
