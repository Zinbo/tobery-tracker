import { Address } from "./Address";
import { Visit } from "./Visit";

export class Restaurant {
    private readonly _name: string;
    private readonly _address: Address;
    private _visit?: Visit;

    constructor(name: string, latitude: number, longitude: number) {
        this._name = name;
        this._address = new Address(latitude, longitude);
    }

    get name(): string {
        return this._name;
    }

    get address(): Address {
        return this._address;
    }

    get visit(): Visit {
        return this._visit;
    }

    initialiseVisit(time: Date,
                    review: string,
                    rating: number,
                    photos: Array<string>) {
        if (this._visit !== null) { throw new Error("Visit can only be set once."); }
        this._visit = new Visit(time, review, rating, photos);
    }

    removeVisit() {
        this._visit = null;
    }
}
