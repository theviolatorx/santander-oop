/* 6. Crie uma classe `Student` com propriedades `name` e `grades` (um array). Adicione um método que calcula a média das notas. */

class Student {
    name: String;
    grades: Number[];

    constructor(
        name: string,
        grades: number[],
    ) {
        this.name = name;
        this.grades = grades;
    }

    calcMedia(): string {
        const elem: number = this.grades.length;
        const resMedia = this.grades.reduce((a, b) => a + b) / elem;
        return `
            O Aluno ${this.name} teve a média ${resMedia} em ${elem} notas!
        `
    }
}