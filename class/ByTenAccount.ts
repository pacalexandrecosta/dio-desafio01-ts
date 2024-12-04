import { DioAccount } from "./DioAccount"

export class ByTenAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = () => {
        super.deposit(10);
    }
}
