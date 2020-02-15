import { RestaurantRepository } from "./../domain/RestaurantRepository"
import VisitDTO from "../../../shared/api/dto/VisitDTO"
import { Restaurant } from "domain/Restaurant"
import { Option } from "prelude-ts"
import UserError from "./errors/UserError"
import ServerError from "./errors/ServerError"

export default class VisitService {

    constructor(private repository: RestaurantRepository) {}

    async saveVisit(visit: VisitDTO) {
        // get restaurant from db
        const matchingRestaurant: Option<Restaurant> = await this.repository.getRestaurantById(visit.restaurantId)
        const restaurant = matchingRestaurant.getOrThrow(new UserError("restaurantId must match existing restaurant"))
        // add visit
        try {
            restaurant.initialiseVisit(visit.date, visit.review, visit.rating, [])
        } catch(e) {
            const error: Error = e
            throw new ServerError(error.message)
        }

        // save again through repo
        await this.repository.update(restaurant)
    }
}