/**
 * Created by giovanniagalvis on 1/28/15.
 */
//Screencast: Functions - Function Execution
//Variable Scope
/*function outptMsg(){
    console.log("Hello World");
}
calcArea(30, 20);
function calcArea(w, h){  //w = 30 , h = 20
    var area = w * h;
    console.log(area);
}
*/
/*
function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}
dogYears(4);
dogYears(5);

*/
/*var total = calcArea(30,20);

function calcArea(w,h){
    var area = w * h;
    return area; // function is spitting the info out
}

console.log(total);*/
//this is a function
/*function calAreaF(width, height){
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}*/

var calcArea = function(w,h){
    var area = w * h;
    return area; // function is spitting the info out
}
var a = calcArea(29,30); //invoking
console.log(a);