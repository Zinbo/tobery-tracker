export default class Address {
    private readonly line1: string;
    private readonly line2: string;
    private readonly town: string;
    private readonly county: string;
    private readonly country: string;
    private readonly postcode: string;    

    constructor(line1: string, line2: string, town: string, county: string, country: string, postcode: string) {
        this.line1 = line1;
        this.line2 = line2;
        this.town = town;
        this.county = county;
        this.country = country;
        this.postcode = postcode;
    }

    get Line1() {
        return this.line1;
    }

    get Line2() {
        return this.line2;
    }

    get Town() {
        return this.town;
    }

    get County() {
        return this.county;
    }

    get Country() {
        return this.country;
    }

    get Postcode() {
        return this.postcode;
    }
}