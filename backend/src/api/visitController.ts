import { Request, Response, Router} from "express"
import express from "express"
import VisitService from "./visitService"
import UserError from "./errors/UserError"
import ServerError from "./errors/ServerError"



export default function visitController(service: VisitService): Router {
    const router = express.Router()

    router.post("/", async (req: Request, res: Response) => {
        console.log(`Sent visit which looks like: ${JSON.stringify(req.body)}`)
        try {
            await service.saveVisit(req.body)    
        }
        catch(e) {
            console.log(`caught error: ${JSON.stringify(e)}`)
            const error: Error = e
            if(e instanceof UserError) return res.status(400).send(error.message)
            else if(e instanceof ServerError) return res.status(500).send(error.message)
            else return res.status(500).send("unexpected error")
        }
        
        return res.send()
    })

    return router
}

