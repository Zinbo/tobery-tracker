import Location from "./Location";
import { Visit } from "./Visit";

export class Restaurant {
    private readonly id: string;
    private readonly name: string;
    private readonly location: Location;
    private readonly tobyCarveryCode: number;
    private visit?: Visit;

    constructor(name: string, location: Location, tobyCarveryCode: number) {
        this.name = name;
        this.location = location;
        this.tobyCarveryCode = tobyCarveryCode;
    }

    get Name(): string {
        return this.name;
    }

    get Location(): Location {
        return this.location;
    }

    get Visit(): Visit {
        return this.visit;
    }

    get TobyCaveryCode() {
        return this.tobyCarveryCode;
    }

    initialiseVisit(time: Date,
                    review: string,
                    rating: number,
                    photos: Array<string>) {
        if (this.visit !== null) { throw new Error("Visit can only be set once."); }
        this.visit = new Visit(time, review, rating, photos);
    }

    removeVisit() {
        this.visit = null;
    }
}
