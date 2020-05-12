export default class RestaurantDTO {
    id: string;
    name: string;
    tobyCarveryCode: number;

    // location
    line1: string;
    line2: string;
    town: string;
    county: string;
    country: string;
    postcode: string;  

    latitude: number;
    longitude: number;
}