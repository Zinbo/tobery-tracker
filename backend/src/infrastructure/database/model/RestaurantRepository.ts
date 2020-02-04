import { RestaurantRepository } from "./../../../domain/RestaurantRepository";
import { Restaurant } from "./../../../domain/Restaurant";
import { RestaurantDAO } from "./RestaurantDAO";

const RestaurantModel = new RestaurantDAO().getModelForClass(RestaurantDAO);

export class RestaurantRepositoryImpl implements RestaurantRepository {

    async save(restaurant: Restaurant): Promise<void> {
        const restaurantModel = RestaurantModel.convertToModel(restaurant);
        const restaurantToSave = new RestaurantModel(restaurantModel);
        restaurantToSave.save();
    }

    async getAllRestaurants(): Promise<Restaurant[]> {
        const daos = await RestaurantModel.find();
        return daos.map(dao => dao.convertToEntity());
    }
}
