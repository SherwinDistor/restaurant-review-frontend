export default class CreateRestaurantDto {
	constructor(name, cuisineType, phoneNumber, address, operatingHours) {
		this.name = name;
		this.cuisineType = cuisineType;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.operatingHours = operatingHours;
	}
}
