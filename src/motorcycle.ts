import { Vehicle } from './vehicle';

export class Motorcycle extends Vehicle {
    hasHelmet: boolean = true;
    type: string;

    constructor(wheels: number, brand: string, hasHelmet: boolean, type: string) {
        super(wheels,brand);
        this.hasHelmet = hasHelmet;
        this.type = type;
    }

    isItSafe(): void {
        console.log(`This motorcyle ${this.hasHelmet ? 'has' : 'does not have'} helmet storage.`)
    }

}
