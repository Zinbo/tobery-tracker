import Coordinates from '../../domain/Coordinates';
import CarveryDTO from "../proxy/CarveryDTO";
import Address from '../../domain/Address';
import Location from '../../domain/Location';
import { Restaurant } from '../../domain/Restaurant';

export default class DTOToDomainTransformer {

    static convertToDomain(carvery: CarveryDTO) {
        const coordsDTO = carvery.gpsCoordinates;
        const addressDTO = carvery.address;
        const coords = new Coordinates(coordsDTO.latitude, coordsDTO.longitude);
        const address = new Address(addressDTO.line1, addressDTO.line2, addressDTO.town, addressDTO.county, addressDTO.country, addressDTO.postcode);
        const location = new Location(address, coords);
        return new Restaurant(carvery.name, location, carvery.bunCode);
    }
}