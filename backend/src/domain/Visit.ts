import { Rating } from "./Rating"
import { errorIfNotDefined, throwErrorOnCondition } from "../shared/Helper"

export class Visit {
  private readonly time: Date;
  private review: string;
  private rating: Rating;
  private photos: Array<string>;

  constructor(
    time: Date,
    review: string,
    rating: number,
    photos: Array<string>
  ) {
    errorIfNotDefined(time, "time cannot be null")
    errorIfNotDefined(review, "review cannot be null")
    this.time = time
    this.review = review
    this.rating = new Rating(rating)
    this.photos = photos ? photos : []
  }

  get Time(): Date {
    return this.time
  }

  get Review(): string {
    return this.review
  }

  get Rating(): number {
    return this.rating.Value
  }

  get Photos(): Array<string> {
    // TODO: When I've settled on the correct form for photos I should not be exposing an array that can be modified outside the root
    return this.photos
  }

  // remove photo

  // add photo

  // replace all photos?
}
