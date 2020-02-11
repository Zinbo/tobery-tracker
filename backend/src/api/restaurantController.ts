import { RestaurantRepository } from "../domain/RestaurantRepository"
import { Request, Response, Router} from "express"
import express from "express"
//TODO shouldn't be accessed from here
import ScheduleService from "../infrastructure/scheduler/ScheduleService"
import DomainToDTOTranslator from "./DomainToDTOTranslator"
import { isBoolean } from "util"
import { Restaurant } from "domain/Restaurant"

export default function restaurantController(repository: RestaurantRepository): Router {
    const router = express.Router()

    router.get("/", async (req: Request, res: Response) => {
        const showVisited = getShowVisitedParam(req);
        let restaurants: Restaurant[];
        if(showVisited) {
            console.log("Getting all restaurants...")
            restaurants = await repository.getAllRestaurants()
        }
        else {
            console.log("Getting all unvisited restaurants...")
            restaurants = await repository.getAllUnvisitedRestaurants()
        }
        const dtos = restaurants.map(r => DomainToDTOTranslator.convertFromDomainToDTO(r))
        return res.send(dtos)
    })

    router.get("/refresh-from-source", async (req: Request, res: Response) => {
        console.log("Getting and saving all carveries.")
        ScheduleService.getAndSaveCarveries()
        return res.send()
    })

    const getShowVisitedParam = (req: Request): boolean => {
        let showVisited = req.query.showVisited;
        if(showVisited !== undefined) {
            if(showVisited == 'false') return false
            return true;
        }
        return true;
    }

    return router
}

