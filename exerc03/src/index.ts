/* 3. Crie uma classe `Rectangle` com propriedades `width` e `height`. Adicione um método que calcula a área do retângulo.
*/
class Circle {
    radius: number;


    constructor(radius: number){
        this.radius = radius;
    }

    calcAreaCir(): string {
        const areaCir = 3.1415 * this.radius ** 2;
        return `A área do circulo de diâmetro ${this.radius}u é de ${areaCir}m².`;
    }
}

const circ1 = new Circle(10);
console.log(circ1.calcAreaCir());

const circ2 = new Circle(100);
console.log(circ2.calcAreaCir());