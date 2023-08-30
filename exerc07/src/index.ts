/* 7. Crie uma classe `BankAccount` com propriedades `balance` e `owner`. Adicione métodos para depositar e sacar dinheiro. */

class BankAccount {
    private owner: string;
    private balance: number;

    constructor(
        owner: string,
        balance: number,
    ){
        this.owner = owner;
        this.balance = balance;
    }

    setDep(value:number): void{
        this.balance += value;
    }

    setSac(value:number): void{
        if (value > this.balance){
            throw `Saldo insulficiente para sacar!`;
        }
        this.balance -= value;
    }

    getBalance(): string{
        return `Sr(a) ${this.owner}, o saldo da conta: R$ ${this.balance.toFixed(2)}`;
    }

}

const conta1 = new BankAccount("Clóvis", 5000);
console.log(conta1.getBalance());

conta1.setDep(1180.12);
console.log(conta1.getBalance());

conta1.setSac(890.52);
console.log(conta1.getBalance());
