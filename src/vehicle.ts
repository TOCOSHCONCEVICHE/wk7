import { Identity } from './identity';

export class Vehicle{
    wheels: number;
    brand: string;
    id: number = -1;

    constructor(wheels: number, brand: string) {
        this.wheels = wheels;
        this.brand = brand;
    }

    getWheels()  {
        console.log(`The vehicle has ${this.wheels} wheels`);
    }

    getInfo() {
        console.log(`The vehicle is a ${this.brand}, with ${this.wheels} wheels.`);
    }

}