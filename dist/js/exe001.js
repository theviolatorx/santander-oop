"use strict";
/* 1. Crie uma classe chamada `Person` com propriedades `name` e `age`. Instancie alguns objetos dessa classe. */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pessoa = new Person("Clóvis Garcia", 48);
console.log(pessoa);
