import { Restaurant } from "./../../../domain/Restaurant";
import { prop, Typegoose } from "typegoose";
import { AddressDAO } from "./AddressDAO";
import { VisitDAO } from "./VisitDAO";

export class RestaurantDAO extends Typegoose {
    @prop()
    name: string;
    @prop()
    address: AddressDAO;
    @prop()
    visit?: VisitDAO;

    static convertToModel(restaurant: Restaurant): RestaurantDAO {
        const model = new RestaurantDAO();
        model.name = restaurant.name;
        model.address = AddressDAO.convertToModel(restaurant.address);
        model.visit = VisitDAO.convertToModel(restaurant.visit);
        return model;
    }

    convertToEntity(): Restaurant {
        const restaurant = new Restaurant(this.name, this.address.latitude, this.address.longitude);
        restaurant.initialiseVisit(this.visit.time, this.visit.review, this.visit.rating, this.visit.photos);
        return restaurant;
    }
}
