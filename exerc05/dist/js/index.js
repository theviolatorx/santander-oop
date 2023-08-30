"use strict";
/* 5. Crie uma classe `Car` com propriedades `make`, `model` e `year`. Crie um método que retorna a descrição do carro. */
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    descCar() {
        const msg = `
            Marca: ${this.make}
            Modelo: ${this.model}
            Ano: ${this.year}
        `;
        return msg;
    }
}
const carro1 = new Car("VW", "Gol", 2006);
const carro2 = new Car("BMW", "GS 1250", 2022);
console.log(carro1.descCar());
console.log(carro2.descCar());
