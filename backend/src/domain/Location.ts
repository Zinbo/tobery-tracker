import Address from "./Address";
import Coordinates from './Coordinates';

export default class Location {
    private readonly address: Address;
    private readonly coordinates: Coordinates;

    constructor(address: Address, coordinates: Coordinates) {
        this.address = address;
        this.coordinates = coordinates;
    }

    get Address() {
        return this.address;
    }

    get Coordinates() {
        return this.coordinates;
    }
}
