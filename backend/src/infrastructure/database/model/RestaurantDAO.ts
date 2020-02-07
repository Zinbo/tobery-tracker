import { Restaurant } from "./../../../domain/Restaurant";
import { prop, Typegoose } from "typegoose";
import { LocationDAO } from "./LocationDAO";
import { VisitDAO } from "./VisitDAO";
import { response } from "express";

export class RestaurantDAO extends Typegoose {
    @prop()
    name: string;
    @prop()
    tobyCaveryCode: number;
    @prop()
    location: LocationDAO;
    @prop()
    visit?: VisitDAO;

    static convertToModel(restaurant: Restaurant): RestaurantDAO {
        const model = new RestaurantDAO();
        model.name = restaurant.Name;
        model.tobyCaveryCode = restaurant.TobyCaveryCode;
        model.location = LocationDAO.convertToModel(restaurant.Location);
        if(restaurant.Visit) model.visit = VisitDAO.convertToModel(restaurant.Visit);
        return model;
    }

    static convertToEntity(dao: RestaurantDAO): Restaurant {
        const restaurant = new Restaurant(dao.name, LocationDAO.convertToEntity(dao.location), dao.tobyCaveryCode);
        if(restaurant.Visit) restaurant.initialiseVisit(dao.visit.time, dao.visit.review, dao.visit.rating, dao.visit.photos);
        return restaurant;
    }
}
