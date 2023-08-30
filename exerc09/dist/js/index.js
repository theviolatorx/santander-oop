"use strict";
/* 9. Crie uma classe `Product` com propriedades `name`, `price` e `quantity`. Adicione métodos para calcular o valor total e exibir os detalhes. */
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totPay() {
        return this.price * this.quantity;
    }
    descTotPay() {
        const msg = `
            Produto: ${this.name}
            Quantidade: ${this.quantity}
            Preço: R$ ${this.price.toFixed(2)}
            Total a Pagar: R$ ${this.totPay().toFixed(2)}
        `;
        return msg;
    }
}
const prod1 = new Product("Mouse", 15.00, 100);
console.log(prod1.descTotPay());
const prod2 = new Product("Teclado", 25.00, 50);
console.log(prod2.descTotPay());
const prod3 = new Product("Mouse Pad", 8.00, 80);
console.log(prod3.descTotPay());
