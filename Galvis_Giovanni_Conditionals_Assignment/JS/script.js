/**
 * Created by Giovanni Galvis
 * 1/22/15
 * Conditionals Assignment.
 *
 */

/*
Here is the first conditional task, It is for new home owners and they want to find out the square footage
for their master bedroom.
*/
/*alert("Congratulations on your new property, please provide some information.");
var height=(prompt("Hello, what is the height of the room?"));
if(height==="" || isNaN(height)){
//This means the user typed in nothing or Not a Number
    height = prompt("Please only use numbers and don't leave blank, what is the height of the room?")
}
var length=(prompt("What is the length of the room?"));
if(length==="" || isNaN(length)){
//This means the user typed in nothing or Not a Number
    length = prompt("Please only use numbers and don't leave blank, What is the length of the room?")
}
var squareFootageCost =(prompt("What is the cost per square foot?"));
if(squareFootageCost==="" || isNaN(squareFootageCost)){
//This means the user typed in nothing or Not a Number
    squareFootageCost = prompt("Please only use numbers and don't leave blank, how many feet tall is the room?")
}
var squareFootage = length * height;
var squareFootPrice = squareFootage * squareFootageCost;
console.log(height + " * " + length + " * " + squareFootageCost);
//checking to see the size of the master bedroom if it's big or small
if(squareFootage >= 250){
    console.log("The square footage of this room is " + squareFootage + "ft");
    console.log("Wow this is a great big room, congratulations");
    console.log("This room is worth $" + squareFootPrice);

} else {
    console.log("The results for the square footage of this room is " + squareFootage + "ft");
    console.log("This is a nice cozy room");
    console.log("This room is worth $" + squareFootPrice);

} */
/*
I typed in the values for the variables of height, length and squareFootageCost and found out the size of the room and value.
 */

alert("Great workout today, let's calculate how many calories you burned today");
var maleOrFemale = prompt("Are you a male or female?");
maleOrFemale = maleOrFemale.toLowerCase();
if(maleOrFemale === "male"){
    console.log(maleOrFemale);
} else if (maleOrFemale === "female"){
    console.log(maleOrFemale);
}
var age = prompt("How old are you");
if(isNaN(age) || age ===""){
    age = prompt("Please enter a numerical value, how old are you?");
} else {
    console.log(age);
}
var miles = prompt("how many miles did you run today?");
if(isNaN(miles)){
    miles = prompt("Please enter a numerical value, how many miles did you run today");
} else if(miles >= 10) {
    console.log("Wow, You ran " + miles + " miles today!");
} else if (miles <10){
    console.log("You ran " + miles + " miles today! Nice!");
}
var weight = prompt("How much do you weight?");
if(isNaN(weight) || weight ===""){
    weight = prompt("Please enter a numerical value, how old are you?");
} else {
    console.log("You weigh " + weight + "lbs.");
}
var heartRate = prompt("What is your heart rate?");
if(isNaN(heartRate) || heartRate ===""){
    heartRate = prompt("Please enter a numerical value, what is your heart rate?");
} else {
    console.log("You heart rate is " + heartRate + " beats per minute");
}
var time = prompt("How long was your workout?", 10);
if(isNaN(time) || time ===""){
    time = prompt("Please enter a numerical value, How long was your workout?");
} else {
    console.log("Your workout lasted " + time + " minutes");
}
var femaleCal = ((age * 0.074) - (weight * 0.05741) + (heartRate * 0.4472) - 20.4022) * time / 4.184;

var maleCal = ((age * 0.2017) - (weight * 0.09036) + (heartRate * 0.6309) - 55.0969) * time / 4.184;
femaleCal = femaleCal.toFixed(2);
maleCal = maleCal.toFixed(2);
if(maleOrFemale === "male"){
    alert("You burned " + maleCal + " calories.");
} else if (maleOrFemale === "female"){
    alert("You burned " + femaleCal + " calories.");
}
//I finally did it, I made a calories burned calculation.
//It worked I entered same values for male and female had different results for each.
