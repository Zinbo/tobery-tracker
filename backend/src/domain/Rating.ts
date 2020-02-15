import { errorIfNotDefined } from "../shared/Helper"

export class Rating {
    private readonly value: number;

    constructor(value: number) {
        errorIfNotDefined(value, "rating cannot be null")
        if (value < 0 || value > 5) {
            throw new Error("rating must be between 0 and 5 stars")
        }
        if (!Number.isInteger(value)) {
            throw new Error("Rating must be whole number")
        }
        this.value = value
    }

    get Value() {
        return this.value
    }
}
