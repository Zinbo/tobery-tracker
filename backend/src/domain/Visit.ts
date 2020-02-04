import { Rating } from "./Rating";
export class Visit {
    private readonly _time: Date;
    private _review: string;
    private _rating: Rating;
    private _photos: Array<string>;

	constructor(time: Date, review: string, rating: number, photos: Array<string>) {
		this._time = time;
		this._review = review;
		this._rating = new Rating(rating);
		this._photos = photos;
    }

    get time(): Date {
        return this._time;
    }

    get review(): string {
        return this._review;
    }

    get rating(): number {
        return this._rating.value;
    }

    get photos(): Array<string> {
        // TODO: When I've settled on the correct form for photos I should not be exposing an array that can be modified outside the root
        return this._photos;
    }

    // remove photo

    // add photo

    // replace all photos?

}
