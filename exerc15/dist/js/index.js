"use strict";
/* 15. Crie uma hierarquia de classes para representar diferentes tipos de veículos. Cada classe deve ter métodos específicos, como `startEngine()` e `stopEngine()`. */
class Car {
    constructor(engine, whell, color) {
        this.engine = engine,
            this.whell = whell,
            this.color = color;
    }
}
class Volkswagen extends Car {
    constructor(modelo, engine, whell, color) {
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }
    startEngine() {
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        }
        else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
        }
    }
    stopEngine() {
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        }
        else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
class Bmw extends Car {
    constructor(modelo, engine, whell, color) {
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }
    startEngine() {
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        }
        else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
        }
    }
    stopEngine() {
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        }
        else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
class Honda extends Car {
    constructor(modelo, engine, whell, color) {
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }
    startEngine() {
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        }
        else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
        }
    }
    stopEngine() {
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        }
        else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
class Chevrolet extends Car {
    constructor(modelo, engine, whell, color) {
        super(engine, whell, color);
        this.modelo = modelo;
        this.engineRun = false;
    }
    startEngine() {
        if (this.engineRun) {
            console.log("O motor do carro já esta ligado!");
        }
        else {
            this.engineRun = true;
            console.log("O motor do carro ligado!");
        }
    }
    stopEngine() {
        if (!this.engineRun) {
            console.log("O motor do carro já esta desligado!");
        }
        else {
            this.engineRun = false;
            console.log("O motor do carro desligado!");
        }
    }
}
const golBolinha = new Volkswagen("Gol", 2, 5, "red");
