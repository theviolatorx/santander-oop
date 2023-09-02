/* 15. Crie uma hierarquia de classes para representar diferentes tipos de veículos. Cada classe deve ter métodos específicos, como `startEngine()` e `stopEngine()`. */

class Car {
    engine;
    whell;
    color;
    
    constructor(engine: number, whell: number, color: "red" | "green" | "blue" | "white" | "black"){
        this.engine = engine,
        this.whell = whell,
        this.color = color
    }

}

class Volkswagen extends Car{
    modelo;
    private engineRun: boolean;

    constructor(modelo: string, engine: number, whell: number, color: "red" | "green" | "blue" | "white" | "black"){
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }

    startEngine(){
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        } else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
            
        }
    }
    
    stopEngine(){
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        } else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
class Bmw extends Car{
    modelo;
    private engineRun: boolean;

    constructor(modelo: string, engine: number, whell: number, color: "red" | "green" | "blue" | "white" | "black"){
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }

    startEngine(){
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        } else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
            
        }
    }
    
    stopEngine(){
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        } else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
class Honda extends Car{
    modelo;
    private engineRun: boolean;

    constructor(modelo: string, engine: number, whell: number, color: "red" | "green" | "blue" | "white" | "black"){
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }

    startEngine(){
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        } else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
            
        }
    }
    
    stopEngine(){
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        } else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
class Chevrolet extends Car{
    modelo;
    private engineRun: boolean;

    constructor(modelo: string, engine: number, whell: number, color: "red" | "green" | "blue" | "white" | "black"){
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }

    startEngine(){
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        } else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
            
        }
    }
    
    stopEngine(){
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        } else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}

const golBolinha = new Volkswagen("Gol",2,5,"red");

