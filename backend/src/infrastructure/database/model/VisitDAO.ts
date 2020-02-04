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
        model.time = visit.time;
        model.review = visit.review;
        model.rating = visit.rating;
        model.photos = visit.photos;
        return model;
    }
}
