/**
 * Created by Giovanni Galvis
 * 1/29/15
 * GoTo Training Day 4
 */

//alert("Hello World");

//Create a file that gives us a random number between
//two numbers

//Ask the user for a min number
var min = prompt("Let's find a random number between two numbers.\nPlease enter a minimum number:");

//Validate that user prompt
/*
Old way of doing it was
if(min==="" || isNaN(min){
    //prompt the user
    min = prompt("Please do not leave blank and only use numbers.");

}
 */

//isNaN() - is Not a Number
console.log(isNaN("cat"));
console.log(isNaN(7));

//New way of validating is with While loops
while(min==="" || isNaN(min)){
    //re-prompt the user
    min = prompt("Please do not leave blank and only use numbers!\mPlease type in min value:");
}