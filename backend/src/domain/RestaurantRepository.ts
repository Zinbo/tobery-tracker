import { Restaurant } from "./Restaurant"
import { Option } from 'prelude-ts';

export interface RestaurantRepository {
    getRestaurantById(restaurantId: string): Promise<Option<Restaurant>>;
    getAllUnvisitedRestaurants(): Promise<Restaurant[]>;
    save: (restaurant: Restaurant) => void;
    getAllRestaurants(): Promise<Restaurant[]>;
}
