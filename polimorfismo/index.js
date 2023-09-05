function Account (agency, account, balance) {
  this.agency = agency,
  this.account = account,
  this.balance = balance
}

Account.prototype.withDraw = function (amount) {
  if (this.balance < amount) {
    console.log('Insufficient funds!!! R$' + this.balance);
    return;
  }

  this.balance -= amount
  this.seeBalance();
};

Account.prototype.deposit = function (amount) {
  this.balance += amount
  this.seeBalance()
};

Account.prototype.seeBalance = function () {
  console.log(`Agency: ${this.agency}, Account: ${this.account}, Balance: R$${this.balance.toFixed(2)}`)
}

acc1 = new Account('Itaú', 2004, 5000)

acc1.deposit(200)
acc1.withDraw(2000)
acc1.withDraw(4000)
// console.log(acc1)

console.log('--------------------------------')


function CurrentAccount (agency, account, balance, limit) {
  Account.call(this, agency, account, balance)
  this.limit = limit
}

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.constructor = CurrentAccount

CurrentAccount.prototype.withDraw = function (amount) {
  if ((this.balance + this.limit) < amount) {
    console.log('Insufficient funds!!! R$' + this.balance);
    return;
  }

  this.balance -= amount
  this.seeBalance();
}

const ca1 = new CurrentAccount('Bradesco', 3002, 10, 200)

ca1.deposit(20)
ca1.withDraw(200)
ca1.withDraw(30)

console.log('------------------------------------')

function SavingsAccount (agency, account, balance) {
  Account.call(this, agency, account, balance)
}

SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

const sa1 = new SavingsAccount('Nubank', 4567, 10)

sa1.deposit(20)
sa1.withDraw(200)
sa1.withDraw(30)