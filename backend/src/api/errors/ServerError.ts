export default class ServerError extends Error {
    constructor(message: string) {
        super()
        Object.setPrototypeOf(this, ServerError.prototype)
        this.message = message
    }
}