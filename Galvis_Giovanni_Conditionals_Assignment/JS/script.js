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
alert("Congratulations on your new property, please provide some information.");
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

}
/*
I typed in the values for the variables of height, length and squareFootageCost and found out the size of the room and value.
 */

