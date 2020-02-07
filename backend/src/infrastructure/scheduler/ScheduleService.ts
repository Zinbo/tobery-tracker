import { RestaurantRepository } from "./../../domain/RestaurantRepository"
import { Restaurant } from "./../../domain/Restaurant"
import { RestaurantRepositoryImpl } from "./../database/model/RestaurantRepository"
import TobyCarveryProxy from "../proxy/tobyCarveryProxy"
import CarveryDTO from "../proxy/CarveryDTO"
import DTOToDomainTransformer from "../transformers/DTOToDomainTransformer"

export default class ScheduleService {
    
    static async getAndSaveCarveries() {
        // Get carveries from db
        const repository = new RestaurantRepositoryImpl()
        let restaurantsFromDb: Restaurant[] = await repository.getAllRestaurants()
        // Get carveries from API
        let restaurantsFromAPI: Restaurant[] = await (await TobyCarveryProxy.getCarveries()).map(dto => DTOToDomainTransformer.convertToDomain(dto))
        
        // Sort to make comparison faster
        restaurantsFromDb = restaurantsFromDb.sort(this.compareCodes)
        restaurantsFromAPI = restaurantsFromAPI.sort(this.compareCodes)
        
        // TODO: see if any old need to be deleted

        // See if any new need to be added
        let dbListIndex = 0
        const restaurantsToAdd = new Array<Restaurant>()
        restaurantsFromAPI.forEach(restaurantFromAPI => {
            if(dbListIndex >= restaurantsFromDb.length) {
                restaurantsToAdd.push(restaurantFromAPI)
                return
            }

            if(restaurantFromAPI.TobyCaveryCode === restaurantsFromDb[dbListIndex].TobyCaveryCode) {
                dbListIndex++
            } else if(restaurantFromAPI.TobyCaveryCode > restaurantsFromDb[dbListIndex].TobyCaveryCode) {
                throw new Error("That's not right... has a restaurant been deleted as it seems to be missing from the API")
            }
            else {
                restaurantsToAdd.push(restaurantFromAPI)
            }
        })

        restaurantsToAdd.forEach(repository.save)
    }
    
    private static compareCodes = (r1: Restaurant, r2: Restaurant): number => r1.TobyCaveryCode - r2.TobyCaveryCode;
}