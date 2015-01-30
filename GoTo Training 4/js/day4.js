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

//Prompt the user for a max number
//do while loop

/*
It always runs at least one time!!
do{
    code to run

} while(condition to test);
 */

do{
  //runs at least once
  //prompt the user
    var max = prompt("Please enter a max value:");
} while(max===""||isNaN(max));
/* function functionName(parameters){
    code goes in here
    }
 */
//Create a function that will give us a random number
function randomizer(minNum,maxNum){
    //Math.random() * (max number - min number) + min number
    var randomNumber = Math.round(Math.random() * (maxNum - minNum) + Number(minNum));
    console.log(randomNumber);
    //Return the value to our main code
    return randomNumber;
}
//Function Call - start the function running!
//Put in arguments to send into the function
//Catch the returned value from the function - create a variable to hold it
var results = randomizer(min, max);

console.log(results);

//I want 15 random numbers?

//Use a loop - for loop -
//for(declare a variable; condition to test; increment of change){
//code }

for (var i = 0; i <15; i++){
   console.log(randomizer(min,max));
}

//Validate specific words?
//Ask a user a yes or no question
var happy = prompt("Are you happy today? Please answer yes or no:");
//Uppercase matters!
//Change the text string to all lower case!
happy = happy.toLowerCase();
while(happy !="yes" && happy !="no" && happy != "maybe"){
    //re-prompt
    happy = prompt("Only type in yes or no. Are you happy?")
}

















