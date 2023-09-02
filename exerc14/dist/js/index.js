"use strict";
/* 14. Crie uma classe `Person` com propriedade `address`. Crie uma classe `Address` separada e associe-a à classe `Person`. */
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    ;
}
class Address extends Person {
    constructor(name, address) {
        super(name, address);
    }
}
const a = new Person("Clóvis", "Av. Central");
const b = new Address("Clóvis", "Av. Centralizada");
