import faker from "@faker-js/faker"

interface AddressObject {
    firstName: String
    lastName: String
    address1: String
    address2: String | null
    city: String
    state: String
    countryCode: String
    postalCode: String
    phone: String
}


interface Address extends AddressObject { }
class Address {

    constructor() {
    }

    static fake(): AddressObject {

        return ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            address1: faker.address.streetAddress(),
            address2: null,
            city: faker.address.cityName(),
            state: faker.address.state(),
            countryCode: "1",
            postalCode: faker.address.zipCode(),
            phone: faker.phone.phoneNumber()
        })
    }
}

export { AddressObject }

export default Address