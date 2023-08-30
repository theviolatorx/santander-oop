"use strict";
/* 1. Crie uma classe chamada `Person` com propriedades `name` e `age`. Instancie alguns objetos dessa classe.
2. Adicione um método à classe `Person` que imprime uma saudação com o nome da pessoa.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        return `Olá ${this.name}! Você esta bem para os seus ${this.age} anos de idade!`;
    }
}
const pessoa = new Person("Clóvis Garcia", 48);
console.log(pessoa);
console.log(pessoa.hello());
