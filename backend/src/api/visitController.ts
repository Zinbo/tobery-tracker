import { RestaurantRepository } from "../domain/RestaurantRepository"
import { Request, Response, Router} from "express"
import express from "express"



export default function visitController(repository: RestaurantRepository): Router {
    const router = express.Router()

    router.post("/", async (req: Request, res: Response) => {
        console.log(`Sent visit which looks like: ${JSON.stringify(req.body)}`)
        console.log("Simulate save")
        return res.send()
    })

    return router
}

