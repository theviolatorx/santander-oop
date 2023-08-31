"use strict";
/* 11. Crie uma classe `Bank` que contém uma coleção de contas bancárias. Adicione métodos para adicionar contas, fazer transferências e calcular o saldo total do banco. */
// HACK: Acessar a classe Bank e verificar por ela!
var totAccountBalances = 0;
class Bank {
    constructor() {
        this.accountBalance = 0;
    }
    setCreatAccount(name, account, depIni = 0) {
        if (name === undefined ||
            name === "" ||
            account === undefined ||
            account === "" ||
            depIni < 0) {
            throw "Impossível criar a conta. Nome, Número da conta ou Depósito Inicial inválidos.";
        }
        this.name = name;
        this.account = account;
        this.accountBalance = depIni;
        console.log(`Conta número ${this.account} foi criada com sucesso!`);
        totAccountBalances += depIni;
        console.log(totAccountBalances);
    }
    existAccount() {
        if (this.name === undefined || this.account === undefined) {
            return false;
        }
        return true;
    }
    setTrans(accountDest, value) {
        if (this.existAccount()) {
            if (value > this.accountBalance) {
                throw "Saldo da conta insulficiente.";
            }
            else if (value === 0) {
                throw "Valor da transferência não pode ser zero.";
            }
            else if (!accountDest) {
                throw "Conta destino não existe.";
            }
            accountDest.accountBalance += value;
            this.accountBalance -= value;
            console.log(`Transferência de R$ ${value.toFixed(2)} para ${accountDest.name} - Conta: ${accountDest.account} foi realizada com sucesso.`);
        }
        else {
            throw "A conta ainda não foi criada.";
        }
    }
    setDep(value) {
        if (this.existAccount()) {
            this.accountBalance += value;
            totAccountBalances += value;
            console.log(`Depósito de R$ ${value.toFixed(2)} foi realizado com sucesso.`);
        }
        else {
            throw "A conta ainda não foi criada.";
        }
    }
    getBalance() {
        if (this.existAccount()) {
            console.log(`Saldo da conta é de R$ ${this.accountBalance}.`);
        }
        else {
            throw "A conta ainda não foi criada.";
        }
    }
    getBalanceBank() {
        console.log(totAccountBalances.toFixed(2));
    }
} // Fim da Classe Bank
