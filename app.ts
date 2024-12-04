import { ByTenAccount } from './class/ByTenAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
try {
    peopleAccount.withdraw(11);

} catch (error) {
    console.log(error);
}
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(100)
console.log(companyAccount)

const byTenAccount: ByTenAccount = new ByTenAccount('By Ten Account', 30);
byTenAccount.deposit();
byTenAccount.deposit();
console.log(byTenAccount);
