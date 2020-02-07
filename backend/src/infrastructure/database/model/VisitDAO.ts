import { Visit } from "../../../domain/Visit";
import { Typegoose, prop } from "typegoose";
export class VisitDAO extends Typegoose {
    @prop()
    time: Date;
    @prop()
    review: string;
    @prop()
    rating: number;
    @prop()
    photos: Array<string>;

    static convertToModel(visit: Visit): VisitDAO {
        const model = new VisitDAO();
        model.time = visit.Time;
        model.review = visit.Review;
        model.rating = visit.Rating;
        model.photos = visit.Photos;
        return model;
    }
}
