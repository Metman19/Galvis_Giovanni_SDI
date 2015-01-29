/**
 * Created by Giovanni Galvis on 1/29/15.
 * Functions Worksheet
 */
//Calculate the area of a rectangle.
/* var width =5;
var height =6;
var area = calculateArea(width,height);
console.log("The Area of the Rectangle is " + area);

function calculateArea(w,h){
    return w*h;
} */
//example problem

// First Problem - Calculate the circumference of a circle.

var radius = 30;
var pie = 3.14159;
var circumference = calcCir(radius,pie); //First variable for the result.
console.log("The circumference of the circle is " + circumference);

function calcCir(r,p){
    return r*p*2;
}
//The parameters that go into the function calculate correctly each time.
// The second problem stung - calculate how many bee stings are needed to kill an animal in a function.
var weight = 170;
var beeStings = 8.666666667;
var calcBeeStings = calcBeeStings(weight); // Here is the variable for the result.
console.log("It takes "+ calcBeeStings + " bee stings to kill this animal.");

function calcBeeStings(w){
    return w * 8.666666667;
}