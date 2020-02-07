export default class Coordinates {
    private readonly latitude: number;
    private readonly longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    get Latitude(): number {
        return this.latitude;
    }

    get Longitude(): number {
        return this.longitude;
    }
}