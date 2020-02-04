export class Rating {
    private readonly _value: number;

    constructor(value: number) {
        if (value < 0 || value > 5) {
            throw new Error("rating must be between 0 and 5 stars");
        }
        if (!Number.isInteger(value)) {
            throw new Error("Rating must be whole number");
        }
        this._value = value;
    }

    get value() {
        return this._value;
    }
}
