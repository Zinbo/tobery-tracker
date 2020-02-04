import { RestaurantRepository } from "../domain/RestaurantRepository";
import { Request, Response, Router} from "express";
import express from "express";



export default function restaurantController(repository: RestaurantRepository): Router {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
        console.log("Getting all restaurants...");
        const restaurants = await repository.getAllRestaurants();
        return res.send(restaurants);
    });

    return router;
}

