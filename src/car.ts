import { Vehicle } from './vehicle';

export class Car extends Vehicle {
	type: string

	constructor(wheels: number, brand: string, type: string) {
		super(wheels, brand);
		this.type = type;

	}
	getType(name: string)  {
		console.log(`${name}'s car is a ${this.type}`);

	}
	

}