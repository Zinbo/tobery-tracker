import Location from "../../../domain/Location"
import { Typegoose, prop } from "typegoose"
import { add } from "winston"
import Address from "../../../domain/Address"
import Coordinates from "../../../domain/Coordinates"
export class LocationDAO extends Typegoose {
    @prop()
    longitude: number;
    @prop()
    latitude: number;
    @prop()
    line1: string;
    @prop()
    line2: string;
    @prop()
    town: string;
    @prop()
    county: string;
    @prop()
    country: string;
    @prop()
    postcode: string;   

    static convertToModel(location: Location): LocationDAO {
        const model = new LocationDAO()
        const address = location.Address
        const coordinates = location.Coordinates
        model.longitude = coordinates.Longitude
        model.latitude = coordinates.Latitude
        model.line1 = address.Line1
        model.line2 = address.Line2
        model.town = address.Town
        model.county = address.County
        model.country = address.Country
        model.postcode = address.Postcode
        return model
    }

    static convertToEntity(dao: LocationDAO) {
        const addressEntity = new Address(dao.line1, dao.line2, dao.town, dao.county, dao.country, dao.postcode)
        const coordinatesEntity = new Coordinates(dao.latitude, dao.longitude)
        return new Location(addressEntity, coordinatesEntity)
    }
}
