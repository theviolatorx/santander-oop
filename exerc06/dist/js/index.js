"use strict";
/* 6. Crie uma classe `Student` com propriedades `name` e `grades` (um array). Adicione um método que calcula a média das notas. */
class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
    calcMedia() {
        const elem = this.grades.length;
        const resMedia = this.grades.reduce((a, b) => a + b) / elem;
        return `
            O Aluno ${this.name} teve a média ${resMedia} em ${elem} notas!
        `;
    }
}
