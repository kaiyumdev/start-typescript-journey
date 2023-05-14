// class BankAccount {
//     public id: number;
//     public name: string;
//     private _balance: number;
//     constructor(id: number, name: string, balance: number){
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }

//     //getter
//     get balance(): number{
//         return this._balance;
//     }
//     // getBalance(){
//     //    return this._balance;
//     // }

//     //setter
//     set deposit(amount: number){
//         this._balance = this.balance+amount;
//     }

//     addDeposit(amount: number){
//         this._balance = this._balance + amount;
//     }
// }

// const myAccount = new BankAccount(444, 'Persian', 20);
// myAccount.addDeposit(20);
// console.log(myAccount.balance)
// myAccount.deposit = 30;
// // myAccount.getBalance();