export class EmailInUseError extends Error {
  constructor () {
    super('This email is already used by another user.')
    this.name = 'EmailInUseError'
  }
}
