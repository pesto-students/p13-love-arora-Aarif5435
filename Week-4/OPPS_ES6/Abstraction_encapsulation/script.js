class BankAccount{
    #accountNumber
    #accountHolderName
    #balance
    constructor(accountNumber, accountHolderName,balance){
        this.#accountNumber = accountNumber;
        this.#accountHolderName = accountHolderName;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if(this.#balance > 0) this.#balance -= amount;
        else return 'transaction failed';
         
    }
    getBalance(){
        return this.#balance;
    }

}

class SavingsAccount extends BankAccount{
    // super(accountNumber, accountHolderName,balance){}

    deposit(amount){
        super.deposit(amount)
    }
    withdraw(amount){
          super.withdraw(amount)
    }
    getBalance(){
        return super.getBalance()
    }
}

// class CheckingAccount extends BankAccount{
//     constructor(){
//         super(accountHolderName,balance, accountNumber);
//     }

//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//          this.balance -= amount;
//     }
//     getBalance(){
//         return this.balance;
//     }
// }

let acc = new SavingsAccount(1234,'aarif', 100000);
let saving = new SavingsAccount(1234,'aryan', 300000)
console.log(saving.getBalance())
saving.deposit(400000);
console.log(saving.getBalance())
saving.withdraw(800000);
console.log(saving.getBalance())