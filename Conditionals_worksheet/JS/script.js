/**
 * Created by Giovanni Galvis
 * 1/20/15
 * Conditionals_worksheet
 */


//Stuff your face I

var compWeight = prompt("How much do you weigh?");

if(compWeight >= 250){
    console.log("The competitor qualifies for the heavyweight division.");
} else {
    console.log("The competitor needs to gain some weight!");
}

//Group 1: Expressions with Conditionals

//Celsius to Fahrenheit converter
var centDeg;
var degFahren;
var question = prompt("Do you want to know the temperature in C or F?");
console.log(question);

if(question == "F"){
    degFahren = Number(prompt("Enter the degrees Celsius",32));
    console.log(degFahren);
    degFahren = 9/5 * degFahren + 32;
    console.log("The temperature is " + degFahren + " degrees Fahrenheit.");
} else if(question == "C"){
    centDeg = Number(prompt("Enter the degrees Fahrenheit", 0));
    console.log(centDeg);
    centDeg =  5/9 * (centDeg-32);
    console.log("The temperature is " + centDeg + " degrees Celsius.");
}

//Last Chance for Gas!
var mpg = 25;
var gasCap = 16;
var milesDriven;
milesDriven = Number(prompt("How many miles have you driven?"));
console.log(milesDriven);
var gauge = mpg * gasCap - milesDriven;
console.log(gauge);
if(gauge >= 200){
    console.log('Yes, you can make it without stopping for gas!');

} else {
    gauge = gauge / mpg;
    console.log("You only have " + gauge + " gallons of gas in your tank, better get gas now while you can!");
}

