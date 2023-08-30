/* 5. Crie uma classe `Car` com propriedades `make`, `model` e `year`. Crie um método que retorna a descrição do carro. */

class Car {
    make: string;
    model: string;
    year: number;

    constructor(
        make:string,
        model:string,
        year:number,
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    descCar(): string {
        const msg = `
            Marca: ${this.make}
            Modelo: ${this.model}
            Ano: ${this.year}
        `
        return msg;
    }
}

const carro1 = new Car("VW", "Gol", 2006);
const carro2 = new Car("BMW", "GS 1250", 2022);

console.log(carro1.descCar());
console.log(carro2.descCar());