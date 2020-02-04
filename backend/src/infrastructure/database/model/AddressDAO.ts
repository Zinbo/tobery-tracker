import { Address } from "../../../domain/Address";
import { Typegoose, prop } from "typegoose";
export class AddressDAO extends Typegoose {
    @prop()
    longitude: number;
    @prop()
    latitude: number;

    static convertToModel(address: Address): AddressDAO {
        const model = new AddressDAO();
        model.longitude = address.longitude;
        model.latitude = address.latitude;
        return model;
    }
}
