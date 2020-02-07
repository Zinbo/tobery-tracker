import { Restaurant } from "./../domain/Restaurant"
import RestaurantDTO from "../../../shared/api/dto/RestaurantDTO"
export default class DomainToDTOTranslator {
    
    static convertFromDomainToDTO(restaurant: Restaurant): RestaurantDTO {
        const dto = new RestaurantDTO()
        dto.id = restaurant.Id
        dto.name = restaurant.Name
        dto.tobyCarveryCode = restaurant.TobyCaveryCode

        const address = restaurant.Location.Address
        dto.country = address.Country
        dto.county = address.County
        dto.line1 = address.Line1
        dto.line2 = address.Line2
        dto.town = address.Town
        dto.postcode = address.Postcode

        const coordinates = restaurant.Location.Coordinates
        dto.latitude = coordinates.Latitude
        dto.longitude = coordinates.Longitude
        return dto
    }
}