import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly encrypter: Encrypter) {}
  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPass = await this.encrypter.encrypt(account.password)
    return { ...account, password: hashedPass, id: 'teste' }
  }
}
