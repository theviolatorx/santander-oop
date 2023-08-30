/* 4. Crie uma classe `Circle` com propriedade `radius` e um método que calcula a área do círculo.
*/
class Rectangle {
    height: number;
    width: number;

    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }

    calcAreaRet(): string {
        const areaRet = this.height * this.width;
        return `A área do retângulo de largura ${this.width}u e altura ${this.height}u é de ${areaRet}m².`;
    }
}

const ret1 = new Rectangle(10, 10);
console.log(ret1.calcAreaRet());

const ret2 = new Rectangle(100, 10);
console.log(ret2.calcAreaRet());