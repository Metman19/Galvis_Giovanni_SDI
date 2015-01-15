/**
 * Created by giovanni a galvis on 1/14/15.
 * SDI Section #3
 * GoTo Training Day #2
 * 1/14/2015
 */
//alert("Testing to see if the JS File is attached :D");

//Create an age calculator

//Ask the user their name
var name = prompt("Please type in your name");

//console.log out the name
console.log(name);

//Welcome the user with
alert("Welcome " + name + "! Let's figure out how you are.");

//Ask the user what year they are born
//age = current year subtract the year
//they were born
//creat a variable to catch the prompted answer
var yearBorn = prompt("What year were you born:");
console.log(yearBorn);

//What is the current Year?
var currentYear = 2015;

//Calculate the age - create a variable for results
var age = currentYear -  yearBorn - 1;

console.log(name + " you are " + age + "years old");
alert(name + " you are " + age + "years old");

//Make it MORE complex

//Ask the user

var yearsMore = prompt("How many years in the future would you like to know your age?");

console.log(yearsMore);

//Calculate future age

// + plus sign does duty
// prompts ONLY return text strings
// 10 - returns "10"

// What is Casting or Parsing an integer

//Casting - treat one variable as another
//parseInt() - looks for a leading number in a text string.


var futureAge = Number(age) + parseInt(yearsMore);
console.log(futureAge);

// Create a final out text string
var finalOutput = "You will be " + futureAge + " in " + yearsMore + "years.";
console.log(finalOutput);
alert(finalOutput);

var a = Number("40");

console.log(a);

var b = Number("40 years old");
console.log(b);
//Returns NaN - Not a Number
var c = parseInt("40");
console.log(c);

var d = parseInt("40 years old");
console.log(d);

var f = parseInt("I am 40 years old.");
console.log(f);
