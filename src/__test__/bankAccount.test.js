import bankAccount from '../bankAccount';

describe('Bank account methods and properties', () => {
    beforeEach(() => {
        bankAccount.balance = 1000;
    })

    test('Initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000);
    })

    test('depositMoney should function correctly', () => {
        bankAccount.depositMoney(2000)
        expect(bankAccount.balance).toBe(3000)
    })
    
    test('withdrawMoney should function properly', () => {
        bankAccount.withdrawMoney(2000)
        expect(bankAccount.balance).toBe(-1000)
    })
})