/* 12. Crie uma classe `Shape` com método `calculateArea()`. Crie subclasses `Square`, `Triangle` e `Pentagon` que implementam esse método. */

class Shape {

  calculateArea(med1:number, med2:number): void{
  }
}

class Square extends Shape{
    calculateArea(lado1: number, lado2: number): void {
        console.log(`A área do retângulo de lado ${lado1}u e lado ${lado2}u é de ${lado2*lado1}u2`);
    }
}

class Triangle extends Shape{
    calculateArea(base: number, altura: number): void {
        console.log(`A área do triângulo de base ${base}u e altura ${altura}u é de ${(base*altura)/2}u2`);
    }
}

class Pentagon extends Shape{
    calculateArea(lado: number, apotema: number): void {
        console.log(`A área do pentagono com um lado medindo ${lado}u e apótema ${apotema}u é de ${5*lado*apotema}u2`);
    }
}

const quad = new Square();
const tri = new Triangle();
const penta = new Pentagon();

quad.calculateArea(10, 2);
tri.calculateArea(10, 2);
penta.calculateArea(10, 2);
