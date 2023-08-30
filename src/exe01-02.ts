/* 1. Crie uma classe chamada `Person` com propriedades `name` e `age`. Instancie alguns objetos dessa classe.
2. Adicione um método à classe `Person` que imprime uma saudação com o nome da pessoa.
*/
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const pessoa = new Person("Clóvis Garcia",48);
console.log(pessoa);
