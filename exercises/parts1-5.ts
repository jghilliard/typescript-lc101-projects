// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from "./SpaceLocation";

// Part 1: Declare (5) Variables With Type
//let spacecraftName: string =  'Determination';
// let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;


// Part 2: Print Days to Mars
//console.log(`It will take the spacecraft ${spacecraftName} a total of ${daysToMars} to reach Mars.`);


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")

// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation = milesAway / speedMph;
//     let daysAway = hoursToLocation / 24;
//     return daysAway;
// }



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//console.log(`It will take the spacecraft ${spacecraftName} a total of ${getDaysToLocation(kilometersToMars)} to reach Mars.`);
//console.log(`It will take the spacecraft ${spacecraftName} a total of ${getDaysToLocation(kilometersToTheMoon)} to reach Mars.`);



// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    spacecraftName: string;
    speedMph: number;
    constructor(spacecraftName: string, speedMph: number ){
        this.spacecraftName = spacecraftName;
        this.speedMph = speedMph;
        this.milesPerKilometer = 0.621;
    }
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation = milesAway / this.speedMph;
        let daysAway = hoursToLocation / 24;
        return daysAway;
    }
    printDaysToLocation(location: SpaceLocation){
        console.log(`${this.spacecraftName} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}




// Create an instance of the class here:

let spaceShuttle = new Spacecraft("Determination", 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`It will take the craft ${spaceShuttle.spacecraftName} a total of ${spaceShuttle.getDaysToLocation(kilometersToMars)} to reach Mars.`);
console.log(`It will take the craft ${spaceShuttle.spacecraftName} a total of ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} to reach the Moon.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:

//spaceShuttle.color = "stainless steel";
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
//console.log(spaceShuttle.color);