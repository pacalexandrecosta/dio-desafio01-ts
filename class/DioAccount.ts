export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }



  getName = (): string => {
    return this.name
  }

  deposit(amount: number): void {
    if (this.validateStatus()) {
      console.log('Voce depositou')
      this.balance += amount;
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateWithDraw(amount)) {
      console.log('Voce sacou');
      this.balance -= amount;
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }



  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private validateWithDraw = (amount: number): boolean => {
    if (this.balance - amount > 0) {
      return true;
    }
    throw new Error('Insufficient funds')
  }
}
