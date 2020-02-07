import AddressDTO from "./AddressDTO";
import GpsCoordinatesDTO from "./GpsCoordinatesDTO";

export default interface CarveryDTO {
    name: string;
    address: AddressDTO;
    gpsCoordinates: GpsCoordinatesDTO;
    mode: string;
    bunCode: number
}