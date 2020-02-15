export default class UserError extends Error {
    constructor(message: string) {
        super()
        Object.setPrototypeOf(this, UserError.prototype)
        this.message = message
    }
}