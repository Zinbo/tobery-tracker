import { RestaurantRepository } from "../domain/RestaurantRepository"
import { Request, Response, Router} from "express"
import express from "express"
//TODO shouldn't be accessed from here
import ScheduleService from "../infrastructure/scheduler/ScheduleService"
import DomainToDTOTranslator from "./DomainToDTOTranslator"

export default function restaurantController(repository: RestaurantRepository): Router {
    const router = express.Router()

    router.get("/", async (req: Request, res: Response) => {
        console.log("Getting all restaurants...")
        const restaurants = await repository.getAllRestaurants()
        const dtos = restaurants.map(r => DomainToDTOTranslator.convertFromDomainToDTO(r))
        return res.send(dtos)
    })

    router.get("/refresh-from-source", async (req: Request, res: Response) => {
        console.log("Getting and saving all carveries.")
        ScheduleService.getAndSaveCarveries()
        return res.send()
    })

    return router
}

