"use strict";
/* 17. Crie uma classe `Animal` com métodos `eat()` e `makeSound()`. Crie subclasses como `Dog`, `Cat` e `Bird` com implementações específicas. */
class Animau {
    makeSound(msg) {
        console.log(msg);
    }
    ;
    eat() { }
    ;
}
// Implementando a interface
class Dog {
    makeSoudn() {
        console.log("Au au");
    }
    eat() {
        console.log("Comendo ração");
    }
}
// Extendendo a classe
class Cat extends Animau {
    makeSoudn() {
        console.log("Miau Miau");
    }
}
class Bir extends Animau {
    makeSoudn() {
        console.log("Piu Piu");
    }
    eat() {
        console.log("Comendo insetos");
    }
}
let dog = new Dog();
let cat = new Cat();
let bir = new Bir();
console.log(dog.makeSoudn());
console.log(cat.makeSoudn());
console.log(bir.eat());
