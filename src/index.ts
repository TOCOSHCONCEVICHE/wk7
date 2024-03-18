import { Data } from './data';
import { Vehicle } from './vehicle';
import { Car } from './car';
import { Motorcycle } from './motorcycle';

// Type guards
function isNumber(value: any){
    if (typeof value === 'number'){
        return typeof value === 'number';
    } 
}

function isString(value: any){
    if (typeof value === 'string'){
        return typeof value === 'string';
    }   
}

// Array that can be either strings and numbers
let mixedArray: (string | number)[] = [];

mixedArray = mixedArray.concat(['house','car','boat',2,4,6]);

mixedArray.forEach((value) => {
    if(isString(value)){
        console.log('string',value);
    } else if(isNumber(value)){
        console.log('number',value);
    }
})

// Create an instance of Data with Vehicle as generic type
const vehicleData = new Data<Vehicle>();

// Create a new Vehicle instance
const car = new Vehicle(4, 'Toyota');
car.id = 1;

// Add the vehicle to the data
vehicleData.add(car);

// Update the vehicle
vehicleData.update(1, { brand: 'Honda' });

// Delete the vehicle
vehicleData.delete(1);

// Get the vehicle with id 1
const retrievedCar = vehicleData.get(1);
console.log(retrievedCar); // Output: undefined (as it was deleted)

let myCar = new Car(4, 'Hyundai', 'Sports');
let myMotorcycle = new Motorcycle(2, "BMW", true, 'Cruiser');

myCar.getInfo();
myCar.getType('Ronald');
myCar.getWheels();
myMotorcycle.getInfo();
myMotorcycle.getWheels();
myMotorcycle.isItSafe();