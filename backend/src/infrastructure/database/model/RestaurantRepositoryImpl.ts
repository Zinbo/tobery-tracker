import { RestaurantRepository } from "../../../domain/RestaurantRepository"
import { Restaurant } from "../../../domain/Restaurant"
import { RestaurantDAO } from "./RestaurantDAO"
import { Option } from "prelude-ts"


const RestaurantModel = new RestaurantDAO().getModelForClass(RestaurantDAO, {
    schemaOptions: {collection: "restaurants"}
})

export class RestaurantRepositoryImpl implements RestaurantRepository {
    
    async getRestaurantById(restaurantId: string): Promise<Option<Restaurant>> {
        const dao = await RestaurantModel.findById(restaurantId)
        return Option.ofNullable(dao).map(dao => RestaurantDAO.convertToEntity(dao))
    }
    
    async getAllUnvisitedRestaurants(): Promise<Restaurant[]> {
        const daos = await RestaurantModel.find({visit: null})
        return daos.map(dao => RestaurantDAO.convertToEntity(dao))
    }

    async save(restaurant: Restaurant): Promise<void> {
        const restaurantModel = RestaurantDAO.convertToModel(restaurant)
        const restaurantToSave = new RestaurantModel(restaurantModel)
        await restaurantToSave.save()
    }

    async update(restaurant: Restaurant): Promise<void> {
        const restaurantModel = RestaurantDAO.convertToModel(restaurant)
        const restaurantToSave = new RestaurantModel(restaurantModel)
        restaurantToSave.isNew = false
        await restaurantToSave.save();
    }

    async getAllRestaurants(): Promise<Restaurant[]> {
        const daos = await RestaurantModel.find()
        return daos.map(dao => RestaurantDAO.convertToEntity(dao))
    }
}
