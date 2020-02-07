import { Restaurant } from "./Restaurant"

export interface RestaurantRepository {
    save: (restaurant: Restaurant) => void;
    getAllRestaurants(): Promise<Restaurant[]>;
}
