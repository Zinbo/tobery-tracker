import { Request, Response, Router} from "express"
import express from "express"
import VisitService from "./visitService"



export default function visitController(service: VisitService): Router {
    const router = express.Router()

    router.post("/", async (req: Request, res: Response) => {
        console.log(`Sent visit which looks like: ${JSON.stringify(req.body)}`);
        service.saveVisit(req.body);
        return res.send();
    })

    return router
}

