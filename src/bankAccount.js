module.exports = {
    // Create functions here
    balance:1000,
    depositMoney(amount){
        this.balance += amount;
    },
    withdrawMoney(amount){
        this.balance -= amount;
    }
}