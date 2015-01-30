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
}
//Function Call - start the function running!
//Put in arguments to send into the function
randomizer(min, max);


