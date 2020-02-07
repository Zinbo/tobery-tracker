import request from "request-promise-native"
import CarveryDTO from "./CarveryDTO"

export default class TobyCarveryProxy {
    static async getCarveries(): Promise<CarveryDTO[]> {
        const promise: Promise<CarveryDTO[]> = request("https://www.tobycarvery.co.uk/cborms/pub/brands/524/outlets", { json: true }, (err, res, body: CarveryDTO[]) => {
            if(err) {return console.log(err)}
            return body
        })
        return await promise
    }
}