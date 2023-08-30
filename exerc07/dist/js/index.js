"use strict";
/* 7. Crie uma classe `BankAccount` com propriedades `balance` e `owner`. Adicione métodos para depositar e sacar dinheiro. */
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    setDep(value) {
        this.balance += value;
    }
    setSac(value) {
        if (value > this.balance) {
            throw `Saldo insulficiente para sacar!`;
        }
        this.balance -= value;
    }
    getBalance() {
        return `O saldo da conta: R$ ${this.balance.toFixed(2)}`;
    }
}
