import { Restaurant } from "./../../../domain/Restaurant"
import { prop, Typegoose } from "typegoose"
import { LocationDAO } from "./LocationDAO"
import { VisitDAO } from "./VisitDAO"
import { ObjectID } from "bson"

export class RestaurantDAO extends Typegoose {
    @prop()
    _id: string;
    @prop()
    name: string;
    @prop()
    tobyCaveryCode: number;
    @prop()
    location: LocationDAO;
    @prop()
    visit?: VisitDAO;

    static convertToModel(restaurant: Restaurant): RestaurantDAO {
        const model = new RestaurantDAO()
        model._id = restaurant.Id
        model.name = restaurant.Name
        model.tobyCaveryCode = restaurant.TobyCaveryCode
        model.location = LocationDAO.convertToModel(restaurant.Location)
        if(restaurant.Visit) model.visit = VisitDAO.convertToModel(restaurant.Visit)
        return model
    }

    static convertToEntity(dao: RestaurantDAO): Restaurant {
        const restaurant = new Restaurant(dao.name, LocationDAO.convertToEntity(dao.location), dao.tobyCaveryCode)
        restaurant.Id = dao._id
        if(dao.visit) restaurant.initialiseVisit(dao.visit.time, dao.visit.review, dao.visit.rating, dao.visit.photos)
        return restaurant
    }
}
