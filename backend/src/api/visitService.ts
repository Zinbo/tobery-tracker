import { RestaurantRepository } from './../domain/RestaurantRepository';
import VisitDTO from "../../../shared/api/dto/VisitDTO"
import { Restaurant } from 'domain/Restaurant';
import { Option } from 'prelude-ts';

export default class VisitService {

    constructor(private repository: RestaurantRepository) {}

    async saveVisit(visit: VisitDTO) {
        // get restaurant from db
        const matchingRestaurant: Option<Restaurant> = await this.repository.getRestaurantById(visit.restaurantId);
        const restaurant = matchingRestaurant.getOrThrow("restaurantId must match existing restaurant");
        
        // add visit
        // restaurant.initialiseVisit(visit.)
        

        // save again through repo
    }
}