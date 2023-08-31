/* 17. Crie uma classe `Animal` com métodos `eat()` e `makeSound()`. Crie subclasses como `Dog`, `Cat` e `Bird` com implementações específicas. */

// Interface não tem constructor
interface Animal {
    makeSoudn(): void;
    eat(): void;
}

class Animau{
    makeSound(msg: string): void{
        console.log(msg);
    };
    eat(): void{};
}

// Implementando a interface
class Dog implements Animal{
    makeSoudn(): void {
        console.log("Au au");
    }

    eat(): void {
        console.log("Comendo ração")
    }
}

// Extendendo a classe
class Cat extends Animau{
    makeSoudn(): void {
        console.log("Miau Miau");
    }
}

class Bir extends Animau{
    makeSoudn(): void {
        console.log("Piu Piu");
    }

    eat(): void {
        console.log("Comendo insetos")
    }
}

let dog = new Dog();
let cat = new Cat();
let bir = new Bir();

console.log(dog.makeSoudn());
console.log(cat.makeSoudn());
console.log(bir.eat());