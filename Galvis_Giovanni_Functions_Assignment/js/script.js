/**
 * Created by Giovanni Galvis
 * 1/29/15
 * Functions Assignment
 */
//testing to make sure script is connected to html.
//alert("Hello Functions");

//Created first function
// let's find out the volume of a pyramid, the formula for this is volume = 1/3*h*l*w.

/*var height = prompt("What is the height of the pyramid?");

while(height===""||isNaN(height)){
    //re-prompt the user
    height = prompt("Please do not leave blank and use only number\n type in a numerical value:")
}
console.log("The height of the pyramid is " + height + " feet");
var width = prompt("What is the width of the pyramid?");

while(width===""||isNaN(width)){
    //re-prompt the user
    width = prompt("Please do not leave blank and use only number\n type in a numerical value:")
}
console.log("The width of the pyramid is " + width + " feet");
var length = prompt("What is the length of this pyramid?");

while(length===""||isNaN(length)){
    //re-prompt the user
    length = prompt("Please do not leave blank and use only number\n type in a numerical value:")
}
console.log("The length of this pyramid is " + length + " feet");
var calVol = pyramidVol(height,width,length)
function pyramidVol(h,w,l){
    //Now we calculate the volume of the pyramid
    var volume = 1/3 * h * w * l ;
    return volume;
}
console.log("The volume of this pyramid is " + Math.round(calVol) + " feet");
*/
/*
This is my first function it is a "normal" function, it contains 3 parameters,while loops validate the input data.
 */
//The second function will be an anonymous function.
// Now let's find out the Surface Area.
/*var base = prompt("What is the base of the pyramid?");

while(base===""||isNaN(base)){
    //re-prompt the user
    height = prompt("Please do not leave blank and use only number\n type in a numerical value:")
}
console.log("The base of the pyramid is " + base + " feet");
var perimeter = prompt("What is the perimeter of the pyramid?");

while(perimeter===""||isNaN(perimeter)){
    //re-prompt the user
    perimeter = prompt("Please do not leave blank and use only number\n type in a numerical value:")
}
console.log("The perimeter of the pyramid is " + perimeter + " feet");
var length = prompt("What is the length of this pyramid?");

while(length===""||isNaN(length)){
    //re-prompt the user
    length = prompt("Please do not leave blank and use only number\n type in a numerical value:")
}
console.log("The length of this pyramid is " + length + " feet");*/


var surfArea = function(b,p,l){
    //code to run
    var area = b + 1/2*p*l;
    return area;
}

var a = surfArea(20,30,45);

console.log("Surface Area of pyramid is "+ a + " feet");
//The surface area of the pyramid is calculated. 





